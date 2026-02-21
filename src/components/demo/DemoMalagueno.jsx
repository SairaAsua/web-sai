import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Circle, Marker, Polygon, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Crosshair, SquareAsterisk, Search, X } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const installIcon = new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="background:#00FF9D;width:28px;height:28px;border-radius:50%;border:3px solid white;box-shadow:0 0 20px rgba(0,255,157,0.5);display:flex;align-items:center;justify-content:center;">
    <div style="width:10px;height:10px;background:white;border-radius:50%;"></div>
  </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
});

// Risk zones around Malagueño (mock)
const riskZones = [
    {
        name: 'Zona de riesgo alto',
        color: '#EF4444',
        positions: [
            [-31.42, -64.40],
            [-31.43, -64.36],
            [-31.45, -64.37],
            [-31.44, -64.41],
        ],
    },
    {
        name: 'Zona de riesgo medio',
        color: '#F59E0B',
        positions: [
            [-31.44, -64.33],
            [-31.46, -64.31],
            [-31.48, -64.33],
            [-31.47, -64.35],
        ],
    },
    {
        name: 'Zona de riesgo medio',
        color: '#F59E0B',
        positions: [
            [-31.49, -64.39],
            [-31.51, -64.37],
            [-31.52, -64.39],
            [-31.50, -64.41],
        ],
    },
];

// Component to handle map clicks
const ClickHandler = ({ onMapClick }) => {
    useMapEvents({
        click: (e) => {
            onMapClick([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
};

// Component to fly map to a position
const FlyToPosition = ({ position, zoom }) => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.flyTo(position, zoom || 13, { duration: 1.5 });
        }
    }, [position, zoom, map]);
    return null;
};

const DemoMalagueno = () => {
    const [installPoint, setInstallPoint] = useState(null);
    const [coverageRadius, setCoverageRadius] = useState(5000);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [flyTarget, setFlyTarget] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const searchRef = useRef(null);
    const debounceRef = useRef(null);

    const malaguenoCtr = [-31.4633, -64.3583];

    const handleMapClick = useCallback((latlng) => {
        setInstallPoint(latlng);
    }, []);

    // Debounced search using Nominatim
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (query.length < 3) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        debounceRef.current = setTimeout(async () => {
            setIsSearching(true);
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ar&limit=5&accept-language=es`,
                    { headers: { 'User-Agent': 'SAI-WebApp/1.0' } }
                );
                const data = await res.json();
                setSearchResults(data);
                setShowResults(true);
            } catch (err) {
                console.error('Nominatim error:', err);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        }, 400);
    };

    const handleSelectResult = (result) => {
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        setInstallPoint([lat, lon]);
        setFlyTarget([lat, lon]);
        setSelectedCity(result.display_name.split(',')[0]);
        setSearchQuery(result.display_name.split(',').slice(0, 2).join(', '));
        setShowResults(false);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setShowResults(false);
        setSelectedCity(null);
    };

    // Close results on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const coverageKm2 = ((Math.PI * (coverageRadius / 1000) ** 2)).toFixed(1);

    return (
        <section id="demo-malagueno" className="relative py-20 px-4">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-[#00FF9D] text-xs font-mono mb-4">
                        <Crosshair className="w-3 h-3" /> SIMULACIÓN DE INSTALACIÓN
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        ¿Cómo funcionaría el SAI en{' '}
                        <span className="text-[#00FF9D]">{selectedCity || 'tu ciudad'}</span>?
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Buscá tu ciudad o hacé click en el mapa para elegir el punto de instalación
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Side panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-4"
                    >
                        {/* City Search */}
                        <div className="glass-panel rounded-xl p-5 border border-white/5" ref={searchRef}>
                            <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                <Search className="w-4 h-4 text-[#00FF9D]" /> Buscar Ciudad
                            </h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onFocus={() => searchResults.length > 0 && setShowResults(true)}
                                    placeholder="Ej: Mendoza, Bariloche..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FF9D]/50 focus:ring-1 focus:ring-[#00FF9D]/30 transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={clearSearch}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                                {isSearching && (
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2">
                                        <div className="w-4 h-4 border-2 border-[#00FF9D]/30 border-t-[#00FF9D] rounded-full animate-spin" />
                                    </div>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {showResults && searchResults.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#0B2822] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
                                        >
                                            {searchResults.map((result, i) => (
                                                <button
                                                    key={result.place_id || i}
                                                    onClick={() => handleSelectResult(result)}
                                                    className="w-full text-left px-3 py-2.5 text-sm text-white/70 hover:bg-[#00FF9D]/10 hover:text-white transition-colors border-b border-white/5 last:border-b-0 flex items-start gap-2"
                                                >
                                                    <MapPin className="w-3.5 h-3.5 text-[#00FF9D] mt-0.5 flex-shrink-0" />
                                                    <span className="line-clamp-2">{result.display_name}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {showResults && searchResults.length === 0 && searchQuery.length >= 3 && !isSearching && (
                                    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#0B2822] border border-white/10 rounded-lg p-3 text-white/40 text-sm text-center">
                                        No se encontraron resultados
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="glass-panel rounded-xl p-5 border border-white/5">
                            <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#00FF9D]" /> Instrucciones
                            </h3>
                            <ol className="text-white/60 text-sm space-y-2 list-decimal list-inside">
                                <li>Buscá una ciudad o hacé click en el mapa</li>
                                <li>Ajustá el radio de cobertura</li>
                                <li>Observá las zonas cubiertas</li>
                            </ol>
                        </div>

                        {/* Coverage controls */}
                        <div className="glass-panel rounded-xl p-5 border border-white/5">
                            <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                <SquareAsterisk className="w-4 h-4 text-[#FF5C00]" /> Radio de Cobertura
                            </h3>
                            <input
                                type="range"
                                min="2000"
                                max="30000"
                                step="1000"
                                value={coverageRadius}
                                onChange={(e) => setCoverageRadius(Number(e.target.value))}
                                className="w-full accent-[#FF5C00] mb-2"
                            />
                            <div className="flex justify-between text-white/40 text-xs font-mono">
                                <span>2 km</span>
                                <span className="text-[#FF5C00] font-bold">{(coverageRadius / 1000).toFixed(0)} km</span>
                                <span>30 km</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <AnimatePresence mode="wait">
                            {installPoint && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="glass-panel rounded-xl p-5 border border-[#00FF9D]/20 space-y-3"
                                >
                                    <h3 className="text-[#00FF9D] font-bold text-sm">📍 Nodo Instalado</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Latitud</span>
                                            <span className="text-white font-mono text-xs">{installPoint[0].toFixed(4)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Longitud</span>
                                            <span className="text-white font-mono text-xs">{installPoint[1].toFixed(4)}</span>
                                        </div>
                                        <div className="border-t border-white/5 pt-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-white/50">Cobertura</span>
                                                <span className="text-[#00FF9D] font-bold font-mono">{coverageKm2} km²</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Cámaras</span>
                                            <span className="text-white font-mono">4</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Visión</span>
                                            <span className="text-white font-mono">360°</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!installPoint && (
                            <div className="glass-panel rounded-xl p-5 border border-white/5 text-center">
                                <p className="text-white/40 text-sm">
                                    👆 Buscá una ciudad o hacé click en el mapa
                                </p>
                            </div>
                        )}
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
                    >
                        <div style={{ height: '500px' }}>
                            <MapContainer
                                center={malaguenoCtr}
                                zoom={12}
                                scrollWheelZoom={true}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org">OSM</a>'
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                />

                                <ClickHandler onMapClick={handleMapClick} />
                                <FlyToPosition position={flyTarget} zoom={13} />

                                {/* Risk zones */}
                                {riskZones.map((zone, i) => (
                                    <Polygon
                                        key={i}
                                        positions={zone.positions}
                                        pathOptions={{
                                            color: zone.color,
                                            fillColor: zone.color,
                                            fillOpacity: 0.15,
                                            weight: 1.5,
                                            dashArray: '5,5',
                                        }}
                                    />
                                ))}

                                {/* Installation point */}
                                {installPoint && (
                                    <>
                                        <Marker position={installPoint} icon={installIcon} />
                                        <Circle
                                            center={installPoint}
                                            radius={coverageRadius}
                                            pathOptions={{
                                                color: '#00FF9D',
                                                fillColor: '#00FF9D',
                                                fillOpacity: 0.08,
                                                weight: 2,
                                            }}
                                        />
                                    </>
                                )}
                            </MapContainer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DemoMalagueno;

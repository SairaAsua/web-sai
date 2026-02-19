import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Layers, Radio } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icons
const nodeIcon = new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="background:#FF5C00;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 0 12px rgba(255,92,0,0.5);display:flex;align-items:center;justify-content:center;">
    <div style="width:8px;height:8px;background:white;border-radius:50%;"></div>
  </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

const smokeIcon = new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="background:#EF4444;width:20px;height:20px;border-radius:50%;border:2px solid white;box-shadow:0 0 15px rgba(239,68,68,0.6);animation:pulse 2s infinite;">
    <style>@keyframes pulse{0%,100%{box-shadow:0 0 15px rgba(239,68,68,0.6)}50%{box-shadow:0 0 30px rgba(239,68,68,0.9)}}</style>
  </div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

// Camera cone SVG overlay
const CameraCone = ({ position, angle, length }) => {
    const map = useMap();
    const [svgElement, setSvgElement] = useState(null);

    useEffect(() => {
        const halfAngle = 25;
        const startAngle = angle - halfAngle;
        const endAngle = angle + halfAngle;

        const toRad = (deg) => (deg * Math.PI) / 180;
        const center = map.latLngToLayerPoint(position);

        const getPoint = (angleDeg, dist) => {
            const latOffset = dist * Math.cos(toRad(angleDeg)) / 111320;
            const lngOffset = dist * Math.sin(toRad(angleDeg)) / (111320 * Math.cos(toRad(position[0])));
            return [position[0] + latOffset, position[1] + lngOffset];
        };

        const point1 = getPoint(startAngle, length);
        const point2 = getPoint(endAngle, length);

        const svgOverlay = L.polygon(
            [position, point1, point2],
            {
                color: '#FF5C00',
                fillColor: '#FF5C00',
                fillOpacity: 0.12,
                weight: 1,
                opacity: 0.5,
                dashArray: '5,5',
            }
        ).addTo(map);

        setSvgElement(svgOverlay);

        return () => {
            map.removeLayer(svgOverlay);
        };
    }, [map, position, angle, length]);

    return null;
};

const DemoMapView = () => {
    const [showExtended, setShowExtended] = useState(false);
    const [hoveredPoint, setHoveredPoint] = useState(null);

    // Real coordinates
    const nodePosition = [-31.7619, -64.4469]; // Nodo La Rancherita (31°45'42.9"S 64°26'48.8"W)
    const smokePosition = [-31.730057, -64.466228]; // La Serranita, cerca de la montaña (incendio real)
    const mapCenter = [-31.746, -64.4566]; // Centro entre ambos puntos

    return (
        <section id="demo-map" className="relative py-20 px-4">
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
                        <Layers className="w-3 h-3" /> VISTA TERRITORIAL
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white">
                        Mapa <span className="text-blue-400">Territorial</span>
                    </h2>
                    <p className="text-[#F5F6FA]/60 mt-4 text-lg max-w-2xl mx-auto">
                        Nodo La Rancherita → detección de humo en La Serranita
                    </p>
                </motion.div>

                {/* Map container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
                >
                    {/* Controls overlay */}
                    <div className="absolute top-4 right-4 z-[1000] space-y-2">
                        <button
                            onClick={() => setShowExtended(!showExtended)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all backdrop-blur-md ${showExtended
                                ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                                : 'bg-black/50 text-white/80 border border-white/20 hover:bg-black/70'
                                }`}
                        >
                            <Radio className="w-4 h-4" />
                            {showExtended ? 'Radio 30 km (Extendido)' : 'Mostrar radio 30 km'}
                        </button>
                    </div>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 z-[1000] glass-panel-heavy px-4 py-3 rounded-xl space-y-2">
                        <p className="text-white/50 text-[10px] font-mono uppercase tracking-wider">Leyenda</p>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-3 h-3 rounded-full bg-[#FF5C00] border border-white/50" />
                            <span>Nodo SAI — La Rancherita</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-3 h-3 rounded-full bg-red-500 border border-white/50 animate-pulse" />
                            <span>Incendio — La Serranita</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-3 h-1 bg-[#FF5C00]/50 rounded" />
                            <span>Cono de cámara</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                            <div className="w-3 h-3 rounded-full border border-blue-400/50 bg-blue-400/20" />
                            <span>Radio de cobertura</span>
                        </div>
                    </div>

                    <div style={{ height: '500px' }}>
                        <MapContainer
                            center={mapCenter}
                            zoom={showExtended ? 10 : 13}
                            scrollWheelZoom={true}
                            style={{ height: '100%', width: '100%' }}
                            className="rounded-2xl"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org">OSM</a>'
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />

                            {/* Node marker — La Rancherita */}
                            <Marker position={nodePosition} icon={nodeIcon}>
                                <Popup>
                                    <div className="text-black text-sm">
                                        <strong>📡 Nodo SAI: La Rancherita</strong><br />
                                        4 cámaras activas — 360°<br />
                                        Coord: -31.482, -64.528<br />
                                        Estado: Operativo ✅
                                    </div>
                                </Popup>
                            </Marker>

                            {/* Smoke/fire detection — La Serranita */}
                            <Marker position={smokePosition} icon={smokeIcon}>
                                <Popup>
                                    <div className="text-black text-sm">
                                        <strong>🔥 Incendio — La Serranita</strong><br />
                                        Hora: 07:59 am<br />
                                        Distancia al nodo: ~5.6 km<br />
                                        Zona: montaña / sierra<br />
                                        Confianza IA: 77%
                                    </div>
                                </Popup>
                            </Marker>

                            {/* Camera cone — pointing NNW toward La Serranita (333°) */}
                            <CameraCone position={nodePosition} angle={333} length={6000} />

                            {/* Coverage circle - 5km */}
                            <Circle
                                center={nodePosition}
                                radius={5000}
                                pathOptions={{
                                    color: '#3B82F6',
                                    fillColor: '#3B82F6',
                                    fillOpacity: 0.05,
                                    weight: 1.5,
                                    dashArray: '8,8',
                                }}
                            />

                            {/* Extended range - 30km */}
                            {showExtended && (
                                <Circle
                                    center={nodePosition}
                                    radius={30000}
                                    pathOptions={{
                                        color: '#8B5CF6',
                                        fillColor: '#8B5CF6',
                                        fillOpacity: 0.03,
                                        weight: 1,
                                        dashArray: '12,8',
                                    }}
                                />
                            )}
                        </MapContainer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoMapView;

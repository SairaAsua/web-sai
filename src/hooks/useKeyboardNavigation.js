import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useKeyboardNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const routes = [
        '/',
        '/como-funciona',
        '/tecnologia',
        '/nodos-sai',
        '/mapa',
        '/quienes-somos',
        '/blog',
        '/contacto',

        '/demo'
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Ignore if user is typing in an input or textarea
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                return;
            }

            const currentIndex = routes.indexOf(location.pathname);

            if (currentIndex === -1) return;

            if (event.key === 'ArrowRight') {
                const nextIndex = (currentIndex + 1) % routes.length;
                navigate(routes[nextIndex]);
            } else if (event.key === 'ArrowLeft') {
                const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
                navigate(routes[prevIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate, location, routes]);
};

export default useKeyboardNavigation;

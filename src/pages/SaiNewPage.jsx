import React from 'react';
import InteractiveIndex from '@/components/InteractiveIndex';
import { Helmet } from 'react-helmet';

const SaiPage = () => {
    return (
        <>
            <Helmet>
                <title>SAI Interactive - Sistema de Alerta Inteligente</title>
                <meta name="description" content="Explora el ecosistema SAI de manera interactiva." />
            </Helmet>
            <div className="w-full h-full min-h-screen bg-[#0B2822]">
                <InteractiveIndex />
            </div>
        </>
    );
};

export default SaiPage;

const translations = {
  es: {
    header: {
      inicio: 'Inicio',
      comoFunciona: 'Cómo Funciona',
      nodosSai: 'Nodos SAI',
      tecnologia: 'Tecnología',
      mapa: 'Mapa',
      quienesSomos: 'Quiénes Somos',
      blog: 'Blog',
      contacto: 'Contacto'
    },
    hero: {
      title: 'SAI',
      subtitle: 'Sistema de Alerta de Incendios',
      description: 'Detección temprana de focos de incendio utilizando Inteligencia Artificial. Nodos con Vigilancia autónoma 24/7.',
      requestDemo: 'Contáctanos',
      viewTech: 'VER TECNOLOGÍA_',
      detectionReal: 'DETECCIÓN REAL DEL SISTEMA',
      alertConfirmed: 'ALERTA CONFIRMADA',
      smokeDetected: 'Columna de humo detectada',
      certainty: 'CERTEZA',
      rec: 'GRABANDO'
    },
    howItWorks: {
      title: 'Detección Temprana con',
      subtitle: 'SAINet',
      description: 'El SAI analiza imágenes en tiempo real y alerta a las autoridades en caso de detectar humo o indicios de incendio. Todas las fotos son almacenadas para el constante curado del dataset.',
      steps: {
        step1: {
          title: 'Captura 24/7',
          description: 'Nuestros Nodos equipados capturan imágenes de la zona cubierta (15 km de radio) de forma continua y envían las imágenes para su análisis.'
        },
        step2: {
          title: 'Análisis SAINet',
          description: 'Nuestra red neuronal SAINet procesa cada imagen buscando patrones de humo con algoritmos avanzados de visión por computadora.'
        },
        step3: {
          title: 'Alerta',
          description: 'Notificación inmediata georreferenciada enviada a bomberos, defensa civil y centros de monitoreo.'
        },
        step4: {
          title: 'Validación',
          description: 'Instituciones locales responden a la alerta para confirmar o descartar la presencia de humo.'
        }
      },
      earlyAlert: {
        title: 'Alerta Temprana',
        quote: '"Un sistema integrado de vigilancia, previsión y predicción de amenazas, evaluación de riesgos de desastres, comunicación y actividades de preparación, sistemas y procesos que permiten a las personas, comunidades, gobiernos, empresas y otros tomar medidas oportunas para reducir los riesgos de desastres antes de sucesos peligrosos."',
        source: 'Definición PNUD (UNDP)',
        activeDetection: 'Detección Activa',
        aiVision: 'IA VISION: SMOKE DETECTED',
        aiDesc: 'El algoritmo identifica columnas de humo con alta precisión.',
        monitoring: 'Monitoreo 24/7',
        systemStatus: 'SYSTEM STATUS: ONLINE',
        systemDesc: 'Vigilancia continua del paisaje serrano.'
      }
    },
    saiNodes: {
      title: 'Nodos',
      titleSuffix: 'SAI',
      description: 'Unidades autónomas de observación territorial. Diseñadas para resistir condiciones extremas y mantener una vigilancia constante.',
      designTitle: 'Diseño y Fabricación Propia',
      designDesc: 'Les presentamos nuestro prototipo propio que ya está en etapa de fabricación y prueba en terreno.',
      features: {
        optics: {
          title: 'Cámaras Ópticas',
          desc: '4 cámaras FIJAS para cubrir los 4 puntos cardinales sin puntos ciegos. Actualmente trabajamos con cámaras REOLINK.'
        },
        electric: {
          title: 'Bloque Eléctrico',
          desc: 'Caja estanca con componentes electrónicos y eléctricos para la toma y transmisión de imágenes.'
        },
        mounts: {
          title: 'Soportes',
          desc: 'Sistema adaptable a diferentes infraestructuras (torres, mástiles, etc) con alineación precisa.'
        },
        connectivity: {
          title: 'Conectividad',
          desc: 'La conexión a internet depende de cada subscriptor, los nodos no tienen conectividad propia.'
        }
      },
      liveSim: 'Simulación en Tiempo Real',
      liveStats: {
        temp: 'Temperatura',
        wind: 'Viento',
        certainty: 'Certeza IA',
        status: 'Estado'
      }
    },
    technology: {
      title: 'Red Neuronal',
      subtitle: 'SAINet',
      description: 'Utilizamos arquitecturas CNN + YOLOv12 optimizadas para edge computing. El entrenamiento de SAINet está en constante refinamiento para ajustar cada vez más su desempeño a las condiciones singulares de cada nodo o región.',
      recall: 'Recall 0.86',
      dataset: 'dataset in situ (solo fotos locales)',
      checkpointBtn: 'Mejor checkpoint actualizado de SAINet',
      yoloBtn: 'Powered by Ultralytics YOLO'
    },
    map: {
      title: 'Mapa de Nodos Activos',
      subtitle: 'Visualización y detalle operativo de los primeros prototipos SAI en funcionamiento',
      region: 'Valle de Paravachasca - Córdoba',
      panelTitle: 'Nodos activos',
      panelSubtitle: 'Red SAI — primeros prototipos operativos',
      openLabel: 'Ver más',
      closeLabel: 'Cerrar',
      statusLabel: 'STATUS',
      activeStatus: 'Activo',
      nodes: {
        node1: {
          name: 'Comuna La Serranita',
          dateLabel: 'En operación desde',
          date: 'Noviembre 2025',
          desc: 'Segundo nodo prototipo SAI activado para validación operativa en terreno.',
          partnership: "Trabajo articulado con la Comuna (jefe comunal Carlos 'Carli' Guzmán), Bomberos de Alta Gracia y Defensa Civil local."
        },
        node2: {
          name: 'Comuna La Rancherita y Las Cascadas',
          dateLabel: 'En operación desde',
          date: 'Agosto 2025',
          desc: 'Primer nodo prototipo SAI en operación continua. En su primer mes de funcionamiento detectó 6 incendios.',
          partnership: 'Trabajo articulado con la Comuna (jefe comunal Miguel Vanetti), ETAC y Bomberos de Villa Ciudad de América y Alta Gracia.'
        }
      }
    },
    aboutUs: {
      title: '¿Quiénes Somos?',
      description: 'SAI es una iniciativa técnica impulsada por el equipo de AlterMundi orientada a detección y alerta temprana.',
      readMore: 'LEER MÁS'
    },
    aboutUsDetail: {
      back: 'VOLVER A QUIÉNES SOMOS',
      title: 'Iniciativa',
      titleHighlight: 'SAI',
      p1_bold: 'SAI',
      p1_text: 'es una iniciativa técnica impulsada por el equipo de',
      p1_bold2: 'AlterMundi',
      p1_end: 'orientada a detección y alerta temprana de incendios forestales.',
      p2: 'Diseñamos y operamos nodos en territorio que integran cámaras y sensores, conectividad, y procesamiento en edge para analizar escenas en tiempo real.',
      p3: 'Nuestro foco está en construir un sistema completo: desde la captura de datos y el etiquetado de datasets, hasta el entrenamiento y despliegue de modelos de visión por computadora, la generación de alertas y el registro de evidencias.',
      p4: 'Trabajamos con métricas y validación continua para mejorar precisión, reducir falsas alarmas y sostener un comportamiento consistente en condiciones cambiantes (clima, iluminación, distancia, humo tenue, nubes, etc.).',
      p5: 'El objetivo operativo es que cada nodo pueda detectar señales relevantes con la mayor anticipación posible y emitir una notificación clara y accionable, con información mínima necesaria para facilitar la verificación.',
      p6: 'SAI es una iniciativa dentro de un proyecto mayor de AlterMundi donde también estamos desarrollando el GEAS (Global Early Alert System) y un sistema distribuido de estudio multimodal de la armonía orientado a construir un lenguaje de ratios modalmente agnóstico.'
    },
    news: {
      title: 'Novedades',
      readMore: 'Leer Completo',
      toastTitle: 'Próximamente',
      toastDesc: 'La sección de blog completa estará disponible en breve.',
      items: {
        item1: {
          title: 'Expansión de la Red en Punilla',
          category: 'EXPANSIÓN',
          excerpt: 'Nuevos nodos instalados amplían la cobertura a zonas críticas del Valle de Punilla.'
        },
        item2: {
          title: 'Investigación con INTA',
          category: 'I+D',
          excerpt: 'Colaboración científica para mejorar algoritmos de detección en vegetación nativa.'
        },
        item3: {
          title: 'Reporte Temporada 2024',
          category: 'INFORME',
          excerpt: 'Balance de detecciones y efectividad del sistema durante los meses de riesgo extremo.'
        }
      }
    },
    blog: {
      title: 'Blog Institucional',
      subtitle: 'Avances, hitos y novedades del Sistema de Alerta de Incendios en nuestro compromiso por proteger el territorio.',
      readMore: 'Leer más',
      close: 'Cerrar',
      posts: {
        post1: {
          title: "Articulación Institucional en San Martín de los Andes",
          subtitle: "Fortaleciendo lazos con ENSATUR para la protección de la Patagonia",
          category: "Institucional",
          content: "En el marco de nuestra estrategia de expansión territorial y colaboración interinstitucional, el equipo del Sistema de Alerta de Incendios (SAI) llevó a cabo una serie de reuniones estratégicas en San Martín de los Andes..."
        },
        post2: {
          title: "Trabajo Conjunto con Bomberos Voluntarios",
          subtitle: "Coordinación operativa en Villa Ciudad de América",
          category: "Operaciones",
          content: "La efectividad del Sistema de Alerta de Incendios depende intrínsecamente de la integración con los equipos de respuesta inmediata..."
        },
        post3: {
          title: "Primeros Nodos Operativos: La Serranita y La Rancherita",
          subtitle: "Despliegue de infraestructura en puntos estratégicos",
          category: "Infraestructura",
          content: "Nos complace anunciar la puesta en marcha de los primeros nodos operativos del SAI en las localidades de La Serranita y La Rancherita..."
        },
        post4: {
          title: "El SAI en SúperMoon",
          subtitle: "Presentando el ecosistema tecnológico ante líderes de innovación",
          category: "Eventos",
          content: "El proyecto SAI fue seleccionado para presentarse en SúperMoon, uno de los eventos más relevantes en la intersección de tecnología Web3 e impacto social..."
        },
        post5: {
          title: "Presentación en Edge City",
          subtitle: "Innovación descentralizada en San Martín de los Andes",
          category: "Conferencias",
          content: "En el marco del encuentro Edge City realizado en San Martín de los Andes, el equipo de SAI tuvo la oportunidad de profundizar en los aspectos técnicos de nuestra red de borde..."
        },
        post6: {
          title: "El SAI en Regen Hub DevConnect",
          subtitle: "Tecnología al servicio de la regeneración ecosistémica",
          category: "Comunidad",
          content: "Participamos activamente en el Regen Hub durante DevConnect Argentina, un espacio dedicado a proyectos que utilizan la tecnología para la regeneración ambiental y social..."
        },
        post7: {
          title: "Fabricación del Primer Prototipo de Nodo SAI",
          subtitle: "Hitos en el desarrollo de hardware nacional",
          category: "Desarrollo",
          content: "Alcanzar el diseño final de nuestro primer prototipo de nodo operativo ha sido un viaje de iteración constante y aprendizaje..."
        }
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Únete a la red de protección. Coordinamos instalaciones con municipios, bomberos voluntarios y organizaciones ambientales.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        org: 'Organización',
        orgPlaceholder: 'Municipio / ONG / Particular',
        email: 'Email',
        emailPlaceholder: 'contacto@ejemplo.com',
        phone: 'Teléfono',
        phonePlaceholder: '+54 9 ...',
        message: 'Mensaje',
        messagePlaceholder: 'Detalles sobre tu consulta...',
        submit: 'ENVIAR CONSULTA'
      },
      info: {
        email: 'Email Oficial',
        phone: 'Línea Directa',
        whatsapp: 'WhatsApp',
        whatsappValue: 'Chat Disponible',
        base: 'Base Operativa',
        location: 'La Quintana, Córdoba',
        country: 'Argentina'
      },
      toast: {
        title: 'Mensaje Enviado',
        desc: 'Gracias por contactar a SAI. Responderemos a la brevedad.'
      }
    },
    footer: {
      brandDesc: 'Sistema de Alerta de Incendios.',
      headings: {
        contact: 'Contacto',
        explore: 'Explorar',
        about: 'Sobre Nosotros'
      },
      links: {
        howItWorks: 'Cómo Funciona',
        tech: 'Tecnología Open Source',
        map: 'Mapa de Nodos',
        github: 'Código en GitHub',
        whoWeAre: 'Quiénes Somos',
        blog: 'Blog',
        terms: 'Términos'
      },
      copyright: '© 2025 SAI. Código abierto.'
    },
    presentation: {
      mode: 'PRESENTATION_MODE_ACTIVE',
      title: 'SAI',
      subtitle: 'Sistema de Alerta de Incendios',
      description: 'Red distribuida de inteligencia artificial con visión 360° en tiempo real para la detección temprana de focos ígneos.',
      features: {
        f1: { title: 'Vigilancia Autónoma 24/7', desc: 'Monitoreo continuo sin fatiga humana, operativo día y noche.' },
        f2: { title: 'IA Propietaria (SAINet)', desc: 'Red neuronal entrenada específicamente con orografía local.' },
        f3: { title: 'Cobertura Visual 360°', desc: 'Sistema de cámaras panorámicas sin puntos ciegos.' },
        f4: { title: 'Alertas Multicanal', desc: 'Notificaciones instantáneas vía WhatsApp, Telegram y Radio.' },
        f5: { title: 'Bajo Costo y Escalable', desc: 'Hardware accesible diseñado para despliegue masivo.' }
      }
    },
    terms: {
      title: 'Términos y Condiciones de Uso – Sitio SAI',
      lastUpdate: 'Última actualización: 12/2025',
      intro: {
        p1: 'Este sitio web del proyecto SAI (el “Sitio”) es un proyecto apadrinado por la Asociación Civil AlterMundi.',
        contact: 'Datos de contacto:',
        writeUs: 'Podés escribirnos a',
        hq: 'Sede de referencia:',
        hqAddr: 'Ruta Provincial 56, Km 9, José de la Quintana (Córdoba).',
        accept: 'Al acceder o usar el Sitio, aceptás estos Términos. Si no estás de acuerdo, por favor no uses el Sitio.'
      },
      sections: {
        s1: { title: '1) Finalidad del Sitio', text: 'El Sitio tiene fines informativos y de contacto sobre el proyecto SAI, incluyendo su funcionamiento, alcances, documentación pública y canales para comunicarse con el equipo.' },
        s2: { title: '2) Uso permitido y prohibiciones', text: 'Podés usar el Sitio de forma lícita y razonable. No podés:', l1: 'afectar la disponibilidad del Sitio (ataques, sobrecarga, abuso de automatizaciones/scraping);', l2: 'intentar acceder a áreas restringidas o infraestructura sin autorización;', l3: 'usar el Sitio para fines ilícitos o para vulnerar derechos de terceros.' },
        s3: { title: '3) Descargo sobre alerta temprana', text: 'Si el Sitio describe o integra funciones de detección y/o alerta temprana, entendés y aceptás que:', l1: 'SAI es un sistema de apoyo y no reemplaza a bomberos, defensa civil u otras autoridades;', l2: 'puede haber falsos positivos y falsos negativos;', l3: 'la disponibilidad puede verse afectada por conectividad, energía, clima, mantenimiento u otros factores externos.' },
        s4: { title: '4) Propiedad intelectual del contenido del Sitio', text: 'Salvo que se indique expresamente lo contrario, los contenidos del Sitio (textos, diseño, materiales gráficos, etc.) están protegidos por la normativa argentina de propiedad intelectual.', note: 'Fotos: las fotos publicadas en este Sitio fueron tomadas por nuestro equipo de comunicación. Su uso (reproducción, edición, redistribución o uso comercial) requiere autorización escrita previa, salvo que una pieza indique explícitamente otra licencia.' },
        s5: { title: '5) Software y datos bajo licencia AGPL-3.0 (Open Source)', text: 'Parte de la tecnología y/o datasets vinculados al proyecto se publican bajo licencia GNU AGPL v3.0 (AGPL-3.0).', repos: 'Repositorios oficiales del proyecto (SAI):' },
        s6: { title: '6) Enlaces a terceros', text: 'El Sitio puede contener enlaces a sitios o servicios de terceros. No controlamos su contenido, políticas o disponibilidad, y no asumimos responsabilidad por ellos.' },
        s7: { title: '7) Privacidad', text: 'Si el Sitio recolecta datos personales (por ejemplo, mediante formularios de contacto), su tratamiento se rige por la Ley 25.326 de Protección de Datos Personales y la Política de Privacidad publicada en el Sitio.' },
        s8: { title: '8) Modificaciones', text: 'Podemos actualizar estos Términos en cualquier momento. La versión vigente será la publicada en el Sitio con su fecha de actualización.' },
        s9: { title: '9) Ley aplicable y jurisdicción', text: 'Estos Términos se rigen por las leyes de la República Argentina. Cualquier conflicto se someterá a los tribunales competentes de la Provincia de Córdoba, Argentina, salvo norma imperativa aplicable.' },
        s10: { title: '10) Contacto', text: 'Para consultas generales y legales:' }
      }
    }
  },
  en: {
    header: {
      inicio: 'Home',
      comoFunciona: 'How It Works',
      nodosSai: 'SAI Nodes',
      tecnologia: 'Technology',
      mapa: 'Map',
      quienesSomos: 'About Us',
      blog: 'Blog',
      contacto: 'Contact'
    },
    hero: {
      title: 'SAI',
      subtitle: 'Fire Alert System',
      description: 'Early detection of fire outbreaks using Artificial Intelligence. Autonomous 24/7 surveillance nodes.',
      requestDemo: 'Contact Us',
      viewTech: 'VIEW TECHNOLOGY_',
      detectionReal: 'REAL SYSTEM DETECTION',
      alertConfirmed: 'ALERT CONFIRMED',
      smokeDetected: 'Smoke column detected',
      certainty: 'CERTAINTY',
      rec: 'REC'
    },
    howItWorks: {
      title: 'Early Detection with',
      subtitle: 'SAINet',
      description: 'SAI analyzes images in real-time and alerts authorities when detecting smoke or fire signs. All photos are stored for continuous dataset curation.',
      steps: {
        step1: {
          title: '24/7 Capture',
          description: 'Our equipped nodes continuously capture images from the covered area (15 km radius) and send them for analysis.'
        },
        step2: {
          title: 'SAINet Analysis',
          description: 'Our SAINet neural network processes each image searching for smoke patterns with advanced computer vision algorithms.'
        },
        step3: {
          title: 'Alert',
          description: 'Immediate georeferenced notification sent to firefighters, civil defense, and monitoring centers.'
        },
        step4: {
          title: 'Validation',
          description: 'Local institutions respond to the alert to confirm or dismiss the presence of smoke.'
        }
      },
      earlyAlert: {
        title: 'Early Warning',
        quote: '"An integrated system of hazard monitoring, forecasting and prediction, disaster risk assessment, communication and preparedness activities, systems and processes that enable people, communities, governments, businesses and others to take timely action to reduce disaster risks in advance of hazardous events."',
        source: 'UNDP Definition',
        activeDetection: 'Active Detection',
        aiVision: 'AI VISION: SMOKE DETECTED',
        aiDesc: 'The algorithm identifies smoke columns with high precision.',
        monitoring: '24/7 Monitoring',
        systemStatus: 'SYSTEM STATUS: ONLINE',
        systemDesc: 'Continuous surveillance of mountain landscape.'
      }
    },
    saiNodes: {
      title: 'Nodes',
      titleSuffix: 'SAI',
      description: 'Autonomous territorial observation units. Designed to withstand extreme conditions and maintain constant surveillance.',
      designTitle: 'Proprietary Design and Manufacturing',
      designDesc: 'We present our own prototype which is already in the manufacturing and field testing stage.',
      features: {
        optics: {
          title: 'Optical Cameras',
          desc: '4 FIXED cameras to cover the 4 cardinal points without blind spots. Currently working with REOLINK cameras.'
        },
        electric: {
          title: 'Electric Block',
          desc: 'Watertight box with electronic and electrical components for image capture and transmission.'
        },
        mounts: {
          title: 'Mounts',
          desc: 'System adaptable to different infrastructures (towers, masts, etc) with precise alignment.'
        },
        connectivity: {
          title: 'Connectivity',
          desc: 'Internet connection depends on each subscriber, nodes do not have their own connectivity.'
        }
      },
      liveSim: 'Real-time Simulation',
      liveStats: {
        temp: 'Temperature',
        wind: 'Wind',
        certainty: 'AI Certainty',
        status: 'Status'
      }
    },
    technology: {
      title: 'Neural Network',
      subtitle: 'SAINet',
      description: 'We use CNN + YOLOv12 architectures optimized for edge computing. SAINet training is in constant refinement to increasingly adjust its performance to the unique conditions of each node or region.',
      recall: 'Recall 0.86',
      dataset: 'in situ dataset (local photos only)',
      checkpointBtn: 'Latest updated SAINet checkpoint',
      yoloBtn: 'Powered by Ultralytics YOLO'
    },
    map: {
      title: 'Active Nodes Map',
      subtitle: 'Visualization and operational detail of the first operational SAI prototypes',
      region: 'Paravachasca Valley - Córdoba',
      panelTitle: 'Active Nodes',
      panelSubtitle: 'SAI Network — first operational prototypes',
      openLabel: 'View more',
      closeLabel: 'Close',
      statusLabel: 'STATUS',
      activeStatus: 'Active',
      nodes: {
        node1: {
          name: 'La Serranita Commune',
          dateLabel: 'In operation since',
          date: 'November 2025',
          desc: 'Second SAI prototype node activated for operational field validation.',
          partnership: "Joint work with the Commune (communal chief Carlos 'Carli' Guzmán), Alta Gracia Firefighters and local Civil Defense."
        },
        node2: {
          name: 'La Rancherita and Las Cascadas Commune',
          dateLabel: 'In operation since',
          date: 'August 2025',
          desc: 'First SAI prototype node in continuous operation. Detected 6 fires in its first month.',
          partnership: 'Joint work with the Commune (communal chief Miguel Vanetti), ETAC and Firefighters from Villa Ciudad de América and Alta Gracia.'
        }
      }
    },
    aboutUs: {
      title: 'Who We Are?',
      description: 'SAI is a technical initiative promoted by the AlterMundi team focused on early detection and warning.',
      readMore: 'READ MORE'
    },
    aboutUsDetail: {
      back: 'BACK TO WHO WE ARE',
      title: 'Initiative',
      titleHighlight: 'SAI',
      p1_bold: 'SAI',
      p1_text: 'is a technical initiative promoted by the',
      p1_bold2: 'AlterMundi',
      p1_end: 'team focused on early detection and warning of forest fires.',
      p2: 'We design and operate nodes in the territory that integrate cameras and sensors, connectivity, and edge processing to analyze scenes in real-time.',
      p3: 'Our focus is on building a complete system: from data capture and dataset labeling, to training and deployment of computer vision models, alert generation, and evidence recording.',
      p4: 'We work with metrics and continuous validation to improve accuracy, reduce false alarms, and maintain consistent behavior in changing conditions (weather, lighting, distance, faint smoke, clouds, etc.).',
      p5: 'The operational goal is for each node to detect relevant signals with the greatest possible anticipation and issue a clear and actionable notification, with the minimum necessary information to facilitate verification.',
      p6: 'SAI is an initiative within a larger AlterMundi project where we are also developing GEAS (Global Early Alert System) and a distributed system for multimodal harmony study aimed at building a modally agnostic ratio language.'
    },
    news: {
      title: 'News',
      readMore: 'Read Full',
      toastTitle: 'Coming Soon',
      toastDesc: 'The full blog section will be available shortly.',
      items: {
        item1: {
          title: 'Network Expansion in Punilla',
          category: 'EXPANSION',
          excerpt: 'New nodes installed extend coverage to critical zones in the Punilla Valley.'
        },
        item2: {
          title: 'Research with INTA',
          category: 'R&D',
          excerpt: 'Scientific collaboration to improve detection algorithms in native vegetation.'
        },
        item3: {
          title: '2024 Season Report',
          category: 'REPORT',
          excerpt: 'Balance of detections and system effectiveness during extreme risk months.'
        }
      }
    },
    blog: {
      title: 'Institutional Blog',
      subtitle: 'Advances, milestones, and news from the Fire Alert System in our commitment to protect the territory.',
      readMore: 'Read more',
      close: 'Close',
      posts: {
        post1: {
          title: "Institutional Coordination in San Martín de los Andes",
          subtitle: "Strengthening ties with ENSATUR for Patagonia protection",
          category: "Institutional",
          content: "As part of our territorial expansion strategy and interinstitutional collaboration, the Fire Alert System (SAI) team held a series of strategic meetings in San Martín de los Andes..."
        },
        post2: {
          title: "Joint Work with Volunteer Firefighters",
          subtitle: "Operational coordination in Villa Ciudad de América",
          category: "Operations",
          content: "The effectiveness of the Fire Alert System intrinsically depends on integration with immediate response teams..."
        },
        post3: {
          title: "First Operational Nodes: La Serranita and La Rancherita",
          subtitle: "Infrastructure deployment in strategic points",
          category: "Infrastructure",
          content: "We are pleased to announce the launch of the first operational SAI nodes in the towns of La Serranita and La Rancherita..."
        },
        post4: {
          title: "SAI at SúperMoon",
          subtitle: "Presenting the technological ecosystem to innovation leaders",
          category: "Events",
          content: "The SAI project was selected to present at SúperMoon, one of the most relevant events at the intersection of Web3 technology and social impact..."
        },
        post5: {
          title: "Presentation at Edge City",
          subtitle: "Decentralized innovation in San Martín de los Andes",
          category: "Conferences",
          content: "At the Edge City event in San Martín de los Andes, the SAI team had the opportunity to delve into the technical aspects of our edge network..."
        },
        post6: {
          title: "SAI at Regen Hub DevConnect",
          subtitle: "Technology at the service of ecosystem regeneration",
          category: "Community",
          content: "We actively participated in Regen Hub during DevConnect Argentina, a space dedicated to projects using technology for environmental and social regeneration..."
        },
        post7: {
          title: "Manufacturing the First SAI Node Prototype",
          subtitle: "Milestones in national hardware development",
          category: "Development",
          content: "Achieving the final design of our first operational node prototype has been a journey of constant iteration and learning..."
        }
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Join the protection network. We coordinate installations with municipalities, volunteer firefighters, and environmental organizations.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        org: 'Organization',
        orgPlaceholder: 'Municipality / NGO / Individual',
        email: 'Email',
        emailPlaceholder: 'contact@example.com',
        phone: 'Phone',
        phonePlaceholder: '+54 9 ...',
        message: 'Message',
        messagePlaceholder: 'Details about your inquiry...',
        submit: 'SEND INQUIRY'
      },
      info: {
        email: 'Official Email',
        phone: 'Direct Line',
        whatsapp: 'WhatsApp',
        whatsappValue: 'Chat Available',
        base: 'Operational Base',
        location: 'La Quintana, Córdoba',
        country: 'Argentina'
      },
      toast: {
        title: 'Message Sent',
        desc: 'Thank you for contacting SAI. We will respond shortly.'
      }
    },
    footer: {
      brandDesc: 'Fire Alert System.',
      headings: {
        contact: 'Contact',
        explore: 'Explore',
        about: 'About Us'
      },
      links: {
        howItWorks: 'How It Works',
        tech: 'Open Source Technology',
        map: 'Nodes Map',
        github: 'Code on GitHub',
        whoWeAre: 'Who We Are',
        blog: 'Blog',
        terms: 'Terms'
      },
      copyright: '© 2025 SAI. Open source.'
    },
    presentation: {
      mode: 'PRESENTATION_MODE_ACTIVE',
      title: 'SAI',
      subtitle: 'Fire Alert System',
      description: 'Distributed artificial intelligence network with real-time 360° vision for early detection of fire outbreaks.',
      features: {
        f1: { title: 'Autonomous 24/7 Surveillance', desc: 'Continuous monitoring without human fatigue, operational day and night.' },
        f2: { title: 'Proprietary AI (SAINet)', desc: 'Neural network specifically trained with local orography.' },
        f3: { title: '360° Visual Coverage', desc: 'Panoramic camera system with no blind spots.' },
        f4: { title: 'Multi-channel Alerts', desc: 'Instant notifications via WhatsApp, Telegram, and Radio.' },
        f5: { title: 'Low Cost and Scalable', desc: 'Accessible hardware designed for mass deployment.' }
      }
    },
    terms: {
      title: 'Terms and Conditions of Use – SAI Site',
      lastUpdate: 'Last updated: 12/2025',
      intro: {
        p1: 'This website of the SAI project (the "Site") is a project sponsored by the AlterMundi Civil Association.',
        contact: 'Contact information:',
        writeUs: 'You can write to us at',
        hq: 'Reference headquarters:',
        hqAddr: 'Provincial Route 56, Km 9, José de la Quintana (Córdoba).',
        accept: 'By accessing or using the Site, you accept these Terms. If you do not agree, please do not use the Site.'
      },
      sections: {
        s1: { title: '1) Purpose of the Site', text: 'The Site has informational and contact purposes regarding the SAI project, including its operation, scope, public documentation, and channels to communicate with the team.' },
        s2: { title: '2) Permitted use and prohibitions', text: 'You may use the Site lawfully and reasonably. You may not:', l1: 'affect the availability of the Site (attacks, overload, abuse of automation/scraping);', l2: 'attempt to access restricted areas or infrastructure without authorization;', l3: 'use the Site for unlawful purposes or to violate third-party rights.' },
        s3: { title: '3) Disclaimer about early warning', text: 'If the Site describes or integrates detection and/or early warning functions, you understand and accept that:', l1: 'SAI is a support system and does not replace firefighters, civil defense, or other authorities;', l2: 'there may be false positives and false negatives;', l3: 'availability may be affected by connectivity, energy, weather, maintenance, or other external factors.' },
        s4: { title: '4) Intellectual property of Site content', text: 'Unless expressly stated otherwise, the contents of the Site (texts, design, graphic materials, etc.) are protected by Argentine intellectual property regulations.', note: 'Photos: photos published on this Site were taken by our communication team. Their use (reproduction, editing, redistribution, or commercial use) requires prior written authorization, unless a piece explicitly indicates another license.' },
        s5: { title: '5) Software and data under AGPL-3.0 license (Open Source)', text: 'Part of the technology and/or datasets linked to the project are published under the GNU AGPL v3.0 (AGPL-3.0) license.', repos: 'Official project repositories (SAI):' },
        s6: { title: '6) Third-party links', text: 'The Site may contain links to third-party sites or services. We do not control their content, policies, or availability, and assume no responsibility for them.' },
        s7: { title: '7) Privacy', text: 'If the Site collects personal data (for example, via contact forms), its treatment is governed by Law 25.326 on Personal Data Protection and the Privacy Policy published on the Site.' },
        s8: { title: '8) Modifications', text: 'We may update these Terms at any time. The current version will be that published on the Site with its update date.' },
        s9: { title: '9) Applicable law and jurisdiction', text: 'These Terms are governed by the laws of the Argentine Republic. Any conflict shall be submitted to the competent courts of the Province of Córdoba, Argentina, unless an applicable mandatory rule exists.' },
        s10: { title: '10) Contact', text: 'For general and legal inquiries:' }
      }
    }
  }
};

export default translations;
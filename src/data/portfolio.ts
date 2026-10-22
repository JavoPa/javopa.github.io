export const profile = {
  name: 'Javier Placencia',
  email: 'javixempresa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/javier-placencia/',
  github: 'https://github.com/JavoPa',
};

export const featuredProjects = [
  {
    id: 'optimizacion-turnos', number: '01', category: 'Aplicación web · Optimización',
    title: 'Automatización y Optimización de Turnos', client: 'EFE SUR',
    period: 'Jul. 2026 — Actualidad', datetime: '2026-07', current: true, visual: 'schedule',
    description: 'Sistema web integral para apoyar la generación del gráfico mensual de Tracción: desde el itinerario operacional hasta la asignación de turnos y la gestión de contingencias diarias.',
    tags: ['Python', 'FastAPI', 'React', 'OR-Tools', 'PostgreSQL', 'Docker'],
    challenge: 'Construir turnos a partir del itinerario operacional requiere cruzar disponibilidad del personal, restricciones legales y reglas de operación. Las contingencias diarias agregan la necesidad de encontrar reemplazos con el menor impacto posible.',
    solution: 'Diseño y desarrollo de una plataforma que reúne la planificación mensual y el apoyo a la operación diaria. El motor matemático permite asignar turnos y validar reglas, mientras la interfaz facilita la consulta y gestión del gráfico.',
    features: ['Construcción de turnos a partir del itinerario operacional.', 'Validación automática de restricciones legales y operacionales.', 'Gestión de disponibilidad del personal y sugerencias de reemplazo.', 'Autenticación JWT, permisos por rol y trazabilidad de la información.'],
    architecture: [['Backend y API', 'Python · FastAPI'], ['Optimización matemática', 'Google OR-Tools'], ['Interfaz web', 'React.js'], ['Datos y trazabilidad', 'PostgreSQL'], ['Acceso', 'JWT · roles y permisos'], ['Despliegue', 'Docker']],
  },
  {
    id: 'sistema-electrico-central', number: '02', category: 'Aplicación de escritorio · Grafos',
    title: 'Sistema Eléctrico Interactivo EFE Central', client: 'EFE Central',
    period: 'Jul. 2026 — Actualidad', datetime: '2026-07', current: true, visual: 'network',
    description: 'Aplicación nativa para Windows que permite visualizar, simular e interactuar con el esquema eléctrico de EFE Central, reemplazando pizarras y dibujos manuales por una herramienta digital.',
    tags: ['Python', 'PySide6', 'NetworkX', 'SQLite'],
    challenge: 'La representación manual de la operación eléctrica dificulta mantener una vista actualizada, explorar estados de la red y registrar los cambios realizados por los usuarios.',
    solution: 'Desarrollo de un esquema interactivo basado en grafos, con una interfaz nativa adaptable a monitores de gran formato y pantallas extendidas. La lógica topológica calcula el enrutamiento y la propagación de los estados de energía.',
    features: ['Visualización y simulación de nodos, líneas e interruptores.', 'Cálculo de propagación de energía mediante grafos.', 'Control de acceso, trazabilidad y personalización del esquema.', 'Distribución como aplicación autónoma e instalador para Windows.'],
    architecture: [['Lenguaje', 'Python'], ['Interfaz nativa', 'PySide6 · Qt'], ['Motor topológico', 'NetworkX'], ['Base de datos local', 'SQLite'], ['Empaquetado', 'PyInstaller'], ['Instalador Windows', 'Inno Setup']],
  },
  {
    id: 'sistema-electrico-sur', number: '03', category: 'Software industrial · Integración PLC',
    title: 'Sistema Eléctrico Interactivo EFE SUR', client: 'EFE SUR',
    period: 'Jun. 2025 — Jul. 2025', datetime: '2025-06', current: false, visual: 'plc',
    description: 'Aplicación Windows para visualizar, simular e interactuar con la red eléctrica de EFE SUR. Desarrollada para reemplazar el sistema WinCC existente y mejorar su usabilidad y mantenibilidad.',
    tags: ['Python', 'PyModbus', 'Modbus TCP', 'PLC Kinco'],
    challenge: 'Modernizar la interacción con el esquema eléctrico y conectar el software con el hardware de control, considerando la comunicación con el PLC y el comportamiento ante su pérdida.',
    solution: 'Sistema basado en grafos con control de acceso, trazabilidad y personalización, e integración mediante PyModbus con un controlador Kinco y módulos de expansión de salidas digitales.',
    features: ['Controlador Kinco K608-40DT con Ethernet, 24 entradas y 16 salidas.', 'Tres módulos de expansión Kinco K622-16DT de 16 salidas cada uno.', 'Capacidad definida: 64 salidas; 50 destinadas a 25 seccionadores y 14 de reserva.', 'Lógica de control por software y apagado de salidas ante pérdida de comunicación mediante watchdog.'],
    architecture: [['Entorno', 'Windows · Python'], ['Comunicación', 'PyModbus · Modbus TCP'], ['Controlador', 'Kinco K608-40DT'], ['Expansión', '3 × Kinco K622-16DT'], ['Capacidad del sistema', '64 salidas digitales'], ['Lógica prevista', 'Watchdog de comunicación']],
  },
];

export const otherProjects = [
  { title: 'Becas municipales', category: 'web', label: 'Plataforma web', description: 'Postulación, revisión y gestión de becas para estudiantes en una plataforma centralizada.', tags: ['React', 'Node.js', 'Express', 'MongoDB'], href: 'https://github.com/JavoPa/proyecto-becas', icon: 'layers' },
  { title: 'Acceso a bicicletero institucional', category: 'web mobile', label: 'Aplicación web y móvil', description: 'Digitalización del ingreso y salida de bicicletas, con herramientas de gestión y control de acceso.', tags: ['React Native', 'Node.js', 'MongoDB'], href: 'https://github.com/JavoPa/proyecto-bicicletero', icon: 'scan' },
  { title: 'Monitoreo ferroviario con RFID', category: 'web', label: 'Plataforma ferroviaria', description: 'Apoyo al control de tráfico y registro de servicios e itinerarios mediante sensores RFID simulados.', tags: ['React', 'Node.js', 'Express', 'MongoDB'], href: null, icon: 'route' },
  { title: 'Fiscalización de tripulación', category: 'web', label: 'Módulo de gestión', description: 'Módulo integrado a una plataforma para que la tripulación ferroviaria fiscalice los viajes.', tags: ['Laravel', 'Tailwind CSS', 'MySQL'], href: null, icon: 'check' },
  { title: 'Horario de clases', category: 'mobile', label: 'Aplicación móvil', description: 'Organización de horarios y asignaturas en una aplicación pensada para estudiantes.', tags: ['React Native', 'Expo'], href: 'https://github.com/JavoPa/HorarioAppExpo', icon: 'calendar' },
  { title: 'Cuidado de mascotas', category: 'mobile', label: 'Aplicación móvil', description: 'Seguimiento y organización de la información de salud de mascotas desde el teléfono.', tags: ['Kotlin', 'SQL'], href: 'https://github.com/JavoPa/proyecto-mascotas', icon: 'heart' },
];

export const workExperience = [
  {
    company: 'EFE SUR',
    area: 'Desarrollo Full Stack · Gestión y operación',
    title: 'Sistemas que acompañan la operación',
    description: 'Lideré el desarrollo de proyectos Full Stack para mejorar y mantener el sistema de gestión integrado e implementar nuevos sistemas de gestión, automatización y digitalización de procesos.',
    scope: ['Sistemas de gestión', 'Desarrollo Full Stack', 'Digitalización de procesos'],
    contribution: 'Evolución de las herramientas de gestión y desarrollo de nuevas soluciones para las necesidades de la empresa.',
  },
  {
    company: 'Durban · Giorgio · Vergio',
    area: 'Grupo empresarial de importadoras · Transformación digital',
    title: 'Procesos administrativos más ágiles',
    description: 'Desarrollé proyectos de transformación digital para las áreas de ventas y cobranzas del grupo empresarial de las importadoras Durban, Giorgio y Vergio, automatizando y digitalizando procesos administrativos.',
    scope: ['Ventas y cobranzas', 'Automatización administrativa', 'Gestión empresarial'],
    contribution: 'Mayor productividad del personal administrativo y más rapidez en los procesos de gestión.',
  },
];

export const services = [
  { number: '01', icon: 'layers', title: 'Sistemas empresariales a medida', description: 'Plataformas de gestión y aplicaciones web y de escritorio que conectan las necesidades del negocio con el trabajo diario de sus equipos.', tags: 'Gestión empresarial · Web · Escritorio' },
  { number: '02', icon: 'route', title: 'Automatización y transformación digital', description: 'Digitalizo procesos administrativos y operacionales, desde ventas y cobranzas hasta planificación, para agilizar tareas y apoyar las decisiones.', tags: 'Ventas · Cobranzas · Planificación' },
  { number: '03', icon: 'terminal', title: 'Integración y evolución de sistemas', description: 'Conecto plataformas, bases de datos y equipos, y mejoro sistemas existentes para acompañar los cambios y necesidades de tu empresa.', tags: 'APIs · Mantenimiento · Integración' },
];

export const technologies = [
  { label: 'Interfaces', items: 'React · React Native · Astro · Tailwind CSS · PySide6' },
  { label: 'Backend y datos', items: 'Python · FastAPI · Node.js · Laravel · PostgreSQL · SQLite · MongoDB · MySQL' },
  { label: 'Optimización e integración', items: 'OR-Tools · NetworkX · PyModbus · Modbus TCP' },
  { label: 'Entrega y despliegue', items: 'Docker · Git · PyInstaller · Inno Setup' },
];

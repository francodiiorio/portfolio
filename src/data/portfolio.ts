export const profile = {
  name: "Franco Di Iorio",
  role: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  email: "franco.diiorio5@gmail.com",
  cv: "/diioriocv.pdf",
  siteUrl: "https://portfolio-ts-sigma.vercel.app",
  socials: {
    github: "https://github.com/francodiiorio",
    linkedin: "https://www.linkedin.com/in/franco-di-iorio/",
  },
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  repository: string;
  demo?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "moneta",
    title: "Moneta",
    tagline: "Finanzas personales local-first",
    description:
      "App de finanzas personales donde tus datos nunca salen del dispositivo. Movimientos, presupuestos, planes, ahorro e inversiones y reportes, con backups versionados en un archivo propio. Instalable como PWA.",
    image: "/projects/moneta.jpg",
    repository: "https://github.com/francodiiorio/moneta",
    demo: "https://moneta-chi.vercel.app",
    tags: ["React", "TypeScript", "Tailwind", "IndexedDB", "Zod", "Vitest", "Playwright"],
    featured: true,
  },
  {
    slug: "forta",
    title: "Forta",
    tagline: "Tracker de entrenamiento de fuerza",
    description:
      "Registro de entrenamientos sin backend: sesiones, series, historial y progreso por volumen semanal y peso corporal. Todo persiste en IndexedDB y el dominio está cubierto con tests.",
    image: "/projects/forta.jpg",
    repository: "https://github.com/francodiiorio/forta",
    demo: "https://forta-ten.vercel.app",
    tags: ["React", "TypeScript", "Vite", "IndexedDB", "Vitest"],
    featured: true,
  },
  {
    slug: "last-terminal",
    title: "Last Terminal",
    tagline: "Juego narrativo en una terminal",
    description:
      "Juego que simula el sistema operativo de una estación espacial: comandos de shell reales, gestión de energía, cámaras y comunicaciones, con partidas que se guardan y exportan.",
    image: "/projects/last-terminal.jpg",
    repository: "https://github.com/francodiiorio/last-terminal",
    demo: "https://last-terminal.vercel.app",
    tags: ["React", "TypeScript", "Zustand", "Framer Motion", "Vitest"],
    featured: true,
  },
  {
    slug: "fitapp",
    title: "FitApp",
    tagline: "Seguimiento deportivo mobile",
    description:
      "App mobile para trackear el rendimiento deportivo en distintas disciplinas. Usuarios con Firebase, datos en Firestore y gráficos de progreso.",
    image: "/projects/fitapp.jpg",
    repository: "https://github.com/francodiiorio/fitapp-react-native",
    tags: ["React Native", "JavaScript", "Firebase"],
  },
  {
    slug: "tasks-mvc",
    title: "Tasks MVC",
    tagline: "Gestión de tareas en .NET",
    description:
      "Aplicación web para administrar tareas, con usuarios vía Entity Framework y SQL Server e inicio de sesión con cuenta Microsoft a través de Azure.",
    image: "/projects/tasks-mvc.jpg",
    repository: "https://github.com/francodiiorio/TasksMVC",
    tags: [".NET", "C#", "SQL Server", "Azure", "Bootstrap"],
  },
  {
    slug: "cine-mvc",
    title: "CineXperience",
    tagline: "Cartelera y venta de entradas",
    description:
      "Simulación de la cartelera de un cine donde los usuarios se registran y compran sus entradas.",
    image: "/projects/cine-mvc.jpg",
    repository: "https://github.com/francodiiorio/CineMVC",
    tags: [".NET", "C#", "MySQL", "Bootstrap"],
  },
  {
    slug: "ecommerce-react",
    title: "E-commerce",
    tagline: "Tienda de tecnología",
    description:
      "E-commerce de productos tecnológicos con catálogo y carrito de compras, sobre una API propia en Node y Express.",
    image: "/projects/ecommerce-react.jpg",
    repository: "https://github.com/francodiiorio/ecommerce-react",
    tags: ["React", "JavaScript", "Node", "Express"],
  },
  {
    slug: "retina-diagnosis-ai",
    title: "Retina Diagnosis AI",
    tagline: "Análisis de retinas con IA",
    description:
      "Interfaz web para subir imágenes de retina, enviarlas a modelos de IA y consultar el historial de diagnósticos de cada usuario.",
    repository: "https://github.com/francodiiorio/Retina-Diagnosis-AI",
    tags: ["React", "JavaScript", "Vite"],
  },
];

export const skillGroups = [
  {
    title: "Lenguajes",
    items: ["TypeScript", "JavaScript", "C#", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "Vite", "Zustand"],
  },
  {
    title: "Backend y datos",
    items: [".NET", "Node.js", "Express", "SQL Server", "MySQL", "MongoDB", "Firestore", "IndexedDB"],
  },
  {
    title: "Calidad y herramientas",
    items: ["Vitest", "Playwright", "Testing Library", "Git", "Docker", "Azure", "Vercel"],
  },
];

export const education = [
  {
    title: "Ingeniería en Informática",
    place: "UCEMA · CABA",
    status: "En curso",
    current: true,
  },
  {
    title: "Analista de Sistemas",
    place: "Escuela ORT · CABA",
    status: "Recibido 2024",
    current: false,
  },
];

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

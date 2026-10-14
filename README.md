# Franco Di Iorio — Portfolio

Portfolio personal: proyectos, stack y contacto. Construido con Next.js (App Router),
TypeScript y Tailwind CSS, y desplegado en Vercel.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

| Comando         | Qué hace                     |
| --------------- | ---------------------------- |
| `npm run dev`   | Servidor de desarrollo       |
| `npm run build` | Build de producción          |
| `npm run start` | Sirve el build de producción |
| `npm run lint`  | ESLint                       |

## Estructura

```
src/
  app/          layout, página, imagen Open Graph y manifest
  components/   secciones de la página (Navbar, Hero, Projects, About, Contact…)
  data/         contenido editable: perfil, proyectos y skills
public/
  projects/     capturas de los proyectos
```

Para sumar o editar un proyecto alcanza con tocar `src/data/portfolio.ts` y dejar la
captura en `public/projects/`.

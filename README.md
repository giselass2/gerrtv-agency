# GerTV Agency

Página web de la agencia digital GerTV.

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- [pnpm](https://pnpm.io/) (recomendado) o npm

## Instalación

```bash
pnpm install
```

o con npm:

```bash
npm install
```

## Ejecutar en local

```bash
pnpm vite --config vite.config.local.ts
```

o con npm:

```bash
npx vite --config vite.config.local.ts
```

Luego abre tu navegador en: **http://localhost:5173**

## Compilar para producción

```bash
pnpm vite build --config vite.config.local.ts
```

Los archivos compilados quedarán en la carpeta `dist/`.

## Estructura

```
src/
  App.tsx          — Componente principal con toda la página
  index.css        — Estilos globales y tema
  main.tsx         — Punto de entrada
  assets/          — Imágenes del sitio
  components/ui/   — Componentes de interfaz (shadcn/ui)
  lib/utils.ts     — Utilidades
```

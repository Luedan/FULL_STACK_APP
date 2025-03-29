# Proyecto de Frontend - FAST TEMPLATE

Este proyecto es parte de una arquitectura monorepo que utiliza [Turborepo](https://turbo.build/) para la gestión de múltiples aplicaciones y paquetes. Esta aplicación frontend está construida con [React](https://reactjs.org/) y [Vite](https://vitejs.dev/) y sigue una arquitectura basada en capas para facilitar la escalabilidad y el mantenimiento.

## Estructura de Archivos

La estructura de directorios del proyecto es la siguiente:

```plaintext
.
├── apps
│   └── front
│       ├── index.html                # Archivo principal HTML
│       ├── package.json              # Dependencias y scripts del proyecto
│       ├── postcss.config.js         # Configuración de PostCSS
│       ├── public                    # Archivos públicos estáticos
│       │   ├── img                   # Imágenes
│       │   └── vite.svg              # Logo de Vite
│       ├── src                       # Código fuente del frontend
│       │   ├── application           # Lógica de aplicación (casos de uso y mappers)
│       │   ├── common                # Utilidades comunes
│       │   ├── domain                # Entidades y interfaces de dominio
│       │   ├── infrastructure        # Implementaciones técnicas (adaptadores, fuentes de datos, repositorios)
│       │   └── presentation          # Componentes, contenedores, hooks, locales, y páginas
│       ├── tailwind.config.js        # Configuración de Tailwind CSS
│       ├── tsconfig.json             # Configuración de TypeScript
│       ├── vite.config.ts            # Configuración de Vite
│       └── README.md                 # Documentación del proyecto
├── devops                             # Archivos para la integración y entrega continua
│   ├── CD-STAGE.yml
│   └── CI.yml
├── docker-compose.yml                 # Configuración de Docker Compose
├── Dockerfile                         # Configuración de Docker
├── nginx                              # Configuración de Nginx
│   └── nginx.conf
├── packages                           # Paquetes compartidos entre aplicaciones
│   └── ui                             # Componentes UI reutilizables
├── pnpm-lock.yaml                     # Archivo de bloqueo de dependencias de pnpm
├── pnpm-workspace.yaml                # Configuración del espacio de trabajo de pnpm
├── README.md                          # Documentación principal del monorepo
└── turbo.json                         # Configuración de Turborepo
```

## Requisitos Previos

- Node.js y npm/pnpm instalados.
- Docker y Docker Compose instalados para ejecutar el proyecto en contenedores.
- [Vite](https://vitejs.dev/) para el servidor de desarrollo.

## Configuración Inicial

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```
2. Instala las dependencias utilizando `pnpm`:

   ```bash
   pnpm install
   ```
3. Inicia la aplicación:

   ```bash
   pnpm dev
   ```

## Arquitectura del Proyecto

Este proyecto sigue un enfoque modular y está organizado en varias capas:

- **Application**: Contiene la lógica de la aplicación, como mappers, servicios y casos de uso.
- **Common**: Utilidades que pueden ser utilizadas en diferentes partes de la aplicación.
- **Domain**: Entidades e interfaces que representan el núcleo del dominio del proyecto.
- **Infrastructure**: Implementaciones técnicas como adaptadores, fuentes de datos y repositorios.
- **Presentation**: Componentes, contenedores, hooks, locales y páginas que forman la interfaz de usuario.

## Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con la nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y realiza commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Empuja los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request para revisión.

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar con los mantenedores del proyecto.

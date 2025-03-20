const cronogramaMarkdown = `
# Cronograma de Actividades - Marco de Trabajo Scrum

## Fase 1: Planificación (Semana 1 - 2)
- Definir backlog del producto
- Identificar roles del equipo
- Configurar herramientas de trabajo (Jira, GitHub, Slack, Vercel, AWS, etc.)
- Definir arquitectura del sistema (Frontend, Backend, Base de datos, Pagos)
- Establecer criterios de aceptación de historias de usuario

## Fase 2: Desarrollo del Producto Mínimo Viable (PMV) (Semana 3 - 10)

### Sprint 1 (Semana 3 - 4)
- Configuración inicial del repositorio y CI/CD
- Implementación de autenticación de usuarios (registro/login)
- Creación del modelo de base de datos
- Diseño inicial de la UI/UX
- Desarrollar landing page y página de registro/login

### Sprint 2 (Semana 5 - 6)
- Implementación de CRUD de productos agrícolas
- Subida de imágenes y videos para los productos
- Desarrollo de la página de perfil del agricultor
- Implementación de búsqueda por palabras clave

### Sprint 3 (Semana 7 - 8)
- Integración de pasarelas de pago (PayU, Stripe, MercadoPago)
- Implementación de facturación y comprobantes de pago
- Implementación de comparador de precios
- Optimización de la UI/UX con feedback de usuarios

### Sprint 4 (Semana 9 - 10)
- Pruebas de seguridad y optimización del backend
- Pruebas de carga y escalabilidad
- Pruebas funcionales y corrección de bugs

## Fase 3: Despliegue y pruebas finales (Semana 11 - 12)
- Implementación de hosting en AWS o Google Cloud
- Despliegue de frontend en Vercel
- Pruebas finales y feedback con usuarios reales
- Documentación técnica y presentación final

## Fase 4: Mantenimiento y mejoras continuas (Post-lanzamiento)
- Monitoreo del sistema y métricas de uso
- Resolución de problemas y actualización de seguridad
- Implementación de mejoras según feedback del usuario
`;
export default cronogramaMarkdown;

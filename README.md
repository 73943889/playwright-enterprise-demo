# 🚀 Playwright Native - Enterprise Automation Framework Demo

Este proyecto es una demostración de un framework de automatización de pruebas de nivel empresarial (*Enterprise-Grade*). Está construido de forma **Nativa con Playwright y TypeScript**, aplicando las mejores prácticas de ingeniería de software como el patrón de diseño **Page Object Model (POM)** y la gestión dinámica de múltiples entornos.

La suite automatiza los flujos críticos de la aplicación **Notes App** alojada en la plataforma de [ExpandTesting](https://practice.expandtesting.com/).

---

## 🏗️ Arquitectura del Framework

El proyecto sigue un principio de separación estricta de responsabilidades (*Separation of Concerns*) para garantizar la mantenibilidad, legibilidad y escalabilidad del código a largo plazo:

```text
playwright-enterprise-demo/
├── .github/workflows/
│   └── playwright.yml            # Pipeline de Integración Continua (CI/CD)
├── src/                          # Capa de Código Fuente de Soporte (Abstracción)
│   ├── api/                      # Controladores para peticiones REST API (Setups rápidos)
│   └── pages/                    # Objetos de Página (Page Objects - UI Layer)
│       └── LoginPage.ts          # Abstracción de selectores y acciones de Login
├── tests/                        # Capa de Pruebas Puras (Scripts de Negocio)
│   └── auth-demo.spec.ts         # Pruebas de la suite de autenticación
├── .env.dev                      # Variables de entorno para Desarrollo
├── .env.qa                       # Variables de entorno para QA/Staging
├── .gitignore                    # Exclusiones de Git (Seguridad y optimización)
├── package.json                  # Dependencias y scripts del proyecto
├── playwright.config.ts          # Configuración centralizada del motor
└── tsconfig.json                 # Configuración del compilador de TypeScript

🛠️ Requisitos Previos
Antes de instalar y ejecutar este proyecto, asegúrate de tener instalado en tu máquina local:

Node.js (Versión 18 o superior recomendada)

Git

🚀 Instalación y Despliegue Rápido
Sigue estos pasos secuenciales en tu terminal para clonar el repositorio y preparar el entorno local de pruebas:

Clonar el repositorio:
git clone https://github.com/73943889/playwright-enterprise-demo
cd playwright-enterprise-demo

Instalar dependencias de Node.js:
npm install

Descargar los binarios aislados de los navegadores soportados:
npx playwright install chromium firefox

⚙️ Configuración de Entornos (Multi-Ambiente)
El framework tiene la capacidad de leer dinámicamente las configuraciones de los archivos .env.* ubicados en la raíz del proyecto. Esto se logra inyectando la variable de sistema ENV en la terminal antes de la ejecución:

.env.dev: Apunta al entorno de desarrollo. (Cargado por defecto si no se especifica ninguna variable).

.env.qa: Apunta al entorno de pruebas de QA / Staging.

🧪 Ejecución de la Suite de Pruebas
Puedes ejecutar las pruebas en diferentes modalidades dependiendo de tus necesidades de análisis o debugging:

1. Ejecución Automatizada Pura (Modo Headless / CI)
Ejecuta todas las pruebas en paralelo en segundo plano. Es la modalidad ideal para flujos de Integración Continua:
npx playwright test

2. Ejecución Forzando un Entorno Específico (QA)
Para dirigir la ejecución a un ambiente en particular, inyecta la variable ENV al comando base:

En macOS / Linux:

Bash
ENV=qa npx playwright test
En Windows (PowerShell):

PowerShell
$env:ENV="qa"; npx playwright test
3. Modo Interactivo Visual (Playwright UI Mode)
Abre el entorno gráfico avanzado nativo de Playwright para desarrollo, debugging paso a paso, inspección del DOM y Time-Travel de las acciones ejecutadas:

npx playwright test --ui
📊 Reportes y Diagnóstico Técnico
Playwright genera automáticamente un reporte interactivo rico en datos tras cada ejecución. El framework está configurado con una política de "Retención ante Fallos", lo que significa que si un test falla, se capturarán automáticamente:

Screenshots del estado exacto del navegador.

Trazas completas (Traces) que incluyen llamadas de red, logs de la consola y estados del DOM.

Para inspeccionar el último reporte generado localmente, ejecuta el siguiente comando:

npx playwright show-report
⚙️ Pipeline de CI/CD (GitHub Actions)
El framework está completamente integrado con la nube mediante GitHub Actions. Cada vez que se realiza un push o un Pull Request hacia la rama principal main, un workflow automatizado se dispara para:

Levantar una máquina virtual Ubuntu limpia.

Instalar el entorno de Node.js e infraestructura de navegadores requerida.

Ejecutar la suite completa de pruebas en paralelo.

Adjuntar el reporte HTML final como un artefacto descargable (retenido de forma segura por 30 días).

# Useit Challenge

## Ejecutar la aplicación
### App desplegada
Para acceder a la aplicación solo debes ingresar al siguiente enlace, ya que la aplicación se encuentra desplegada en Vercel: https://use-it-challenge.vercel.app/

Para el inicio de sesión, se requiere acceder con el siguiente nombre de usuario y contraseña:

| Nombre de Usuario | Contraseña |
| ----------------- | ---------- |
| kminchelle | 0lelplR |
##

### Ejecutar en local
Esta app esta usando como servidor ficticio DummyJSON el cual se encarga de suministrar los endpoints necesarios para su funcionamiento, por lo cual no requieres instalar ni ejecutar nada para hacer correr el "backend" ya que los endpoints se encuentran desplegados.

**1. Requisitos previos:**

- Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la última versión desde el sitio oficial de Node.js: [https://nodejs.org/](https://nodejs.org/)

**2. Descargar el proyecto:**

- Descarga el proyecto de Angular desde su repositorio o asegúrate de tener el código fuente en tu máquina local.

**3. Instalar Angular CLI:**

- Abre una terminal o línea de comandos y asegúrate de tener Angular CLI (Command Line Interface) instalado globalmente. Si no lo tienes, ejecuta el siguiente comando para instalarlo:
  `npm install -g @angular/cli`

**4. Instalar las dependencias del proyecto:**

- Navega al directorio raíz del proyecto (donde se encuentra el archivo package.json) usando la terminal o línea de comandos. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:
  `npm install`

**5. Ejecutar el proyecto:**

- Después de instalar las dependencias, puedes ejecutar el proyecto con el siguiente comando:
  `ng serve`

**6. Visualizar el proyecto:**

- Una vez que el proyecto se haya compilado correctamente, podrás visualizarlo en tu navegador web ingresando la siguiente URL:
  `http://localhost:4200/`

## Tecnologías utilizadas
Las tecnologías utilizadas en este proyecto son:

- Angular: Un framework de desarrollo de aplicaciones web de código abierto basado en TypeScript.
  https://angular.io/docs

- DummyJSON: Obtén datos JSON falsos para utilizarlos como marcadores de posición en el desarrollo o en las pruebas de prototipos.
  https://dummyjson.com/

- Vercel: Plataforma de alojamiento y despliegue de aplicaciones web que ofrece una experiencia integral y sencilla para desarrolladores.
  https://vercel.com/docs

- Bootstrap: Un framework de diseño web que proporciona componentes y estilos predefinidos para agilizar el desarrollo de interfaces de usuario.
  https://getbootstrap.com/docs/5.3/getting-started/introduction/

- Angular Material: Una biblioteca de componentes de interfaz de usuario que implementa el Material Design de Google en Angular.
  https://material.angular.io/

- Animate.css: Una biblioteca de animaciones CSS listas para usar que se pueden aplicar fácilmente a elementos HTML.
  https://animate.style/

## Breve descripción de la app
Pequeña aplicación que simula una experiencia de usuario común en un entorno web.

El inicio de sesión está simulado con DummyJSON, el cual expone un endpoint para realizar una petición POST que permite a los usuarios iniciar sesión. Además, genera una respuesta con la información del usuario que acaba de ingresar y un token de autenticación, simulando un entorno de trabajo más realista.

![image](https://github.com/JuanPabloSR/UseItChallenge/assets/62584398/119c18d0-1f57-4795-9176-dac4f461bffe)

Al realizar la petición de inicio de sesión, me suscribo a la respuesta para obtener el token y la información del usuario que ha iniciado sesión, para luego almacenarlos en el localStorage.

![image](https://github.com/JuanPabloSR/UseItChallenge/assets/62584398/1b292691-c838-4a59-9bfa-d8c9224a0078)


Una vez almacenado el token, se utilizan los guards de Angular para proteger las rutas y asegurar que solo los usuarios autenticados puedan acceder a cierta información. Cuando el usuario cierra sesión, el token se elimina del localStorage.

La aplicación cuenta con una lista de usuarios, la cual muestra la información en una tabla de Angular Material. Esta data también es obtenida de DummyJSON. La tabla cuenta con un filtro para buscar resultados más rápidamente y paginación para navegar cómodamente por la lista de usuarios. Estos filtros se agregan a la petición HTTP para realizar una nueva consulta con la información requerida.

![image](https://github.com/JuanPabloSR/UseItChallenge/assets/62584398/64494a6b-4979-400e-b4bc-23ad318f6476)

Cada usuario tiene un botón para ver los detalles del mismo, el cual abre otra pestaña con la información detallada del usuario.

![image](https://github.com/JuanPabloSR/UseItChallenge/assets/62584398/0652bdf2-c37e-440e-810c-e116427e2554)

En resumen, la aplicación proporciona una experiencia de usuario realista, con funcionalidades de inicio de sesión, protección de rutas, lista de usuarios con filtro y paginación, y detalles de usuario. Todo esto se logra mediante el uso de tecnologías como Angular, DummyJSON y Angular Material para brindar una experiencia de usuario fluida y segura.


##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

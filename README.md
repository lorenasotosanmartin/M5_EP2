# Ejercicio practico: Seguridad en la Web del Hospital
## Descripción
En este proyecto, se aplican medidas de seguridad avanzadas en la web del hospital desarrollada en ReactJS. se integra protección contra ataques comunes,
se aseguran las rutas de la aplicación implementando seguridad por roles y autenticación de usuarios para restringir el acceso a áreas específicas de la aplicación.

### Protección de Rutas con React Router DOM
Mediante react router DOM se definen rutas publicas, a las cuales un usuario puede acceder sin autenticacion y rutas privadas a las cuales el usuario solo puede acceder mediante ingreso con sus datos al login del sistema, en rutas privada se encuentra la seccion de administración de citas y la agenda personal de cada doctor. 

### Implementación de Autenticación de Usuarios y Roles 
Para acceder a las rutas privadas de la aplicación, solo se puede ingresar autenticando sus datos en http://localhost:3000/login 
los usuarios actualmente definidos en el sistema corresponden al rol adminsitrador y doctor: 
 - user: administrador, password: admin123!
 - user: felipe Zapata, password: felipeZapata123!
 - 
### Prevención de Vulnerabilidades Comunes
En el sistema se integran medidas de prevención constra ataques Clickjacking y XSS (Cross-Site Scripting), mediante el uso de encabezados especificos y JSX que previene la inyeccion de codigos maliciosos en la aplicación.

### Encriptación de Datos en el Front-End
Mediante el uso de la libreria bcrypt se encriptan los datos de los usuarios del sistema y mediante los metodos que esta libreria provee como bcrypt.compare se pueden utilizar los datos para diversas funcionalidades a lo largo de la aplicación.

 ### Visualización del proyecto
Para visualizar este proyecto se necesita que previamente cuentes con la instalación de:
- **Git**: [sitio de descarga] (https://git-scm.com/downloads)
- **Node.js**: [sitio de descarga] (https://nodejs.org/en/download/package-manager)
- **Visual Studio Code**: [sitio de descarga] (https://code.visualstudio.com/download)
  
Una vez que ya cuentes con lo descrito anteriormente, debes clonar este repositorio en una carpeta local, mediante el siguiente comando:
```bash
git clone https://github.com/lorenasotosanmartin/M5_EP2.git
```
cuando ya este clonado, escribir el siguiente comando en la consola: 
```bash
npm  i
```
y ejecutar el comando, para inicializar el proyecto: 
```bash
npm run dev
```
Finalmente, para visualizar el proyecto en tu navegador debes abrir la url http://localhost:3000/ 

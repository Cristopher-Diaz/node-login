# Proyecto de Práctica con Node.js

Este es un proyecto de práctica con Node.js utilizando varias dependencias populares para manejar la autenticación, la gestión de sesiones, plantillas EJS y una conexión a base de datos MySQL.

## Dependencias

Las dependencias principales que se utilizan en este proyecto son las siguientes:

- **bcryptjs**: Para la encriptación de contraseñas.
- **dotenv**: Para gestionar variables de entorno.
- **ejs**: Para renderizar vistas usando plantillas.
- **express**: Framework web para manejar rutas y servidores HTTP.
- **express-session**: Para gestionar sesiones de usuario en el servidor.
- **mysql**: Para la conexión y manejo de bases de datos MySQL.

### Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/Cristopher-Diaz/node-login
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Configurar el archivo `.env` con las credenciales de tu base de datos. Crear un archivo `.env` basado en el archivo `env.example`:

    ```bash
    cp env.example .env
    ```

4. Iniciar el servidor en modo desarrollo con nodemon:

    ```bash
    node app.js o nodemon app.js
    ```

### Base de datos

Para crear la base de datos en tu entorno local, ejecuta la siguiente query en MySQL:

```sql
DROP DATABASE IF EXISTS node_login;
CREATE DATABASE node_login;
USE node_login;

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

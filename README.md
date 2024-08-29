# API RESTful de Gestión de Productos en un Inventario

Este proyecto desarrolla una API RESTful utilizando NestJs y PostgreSQL para gestionar productos. 
Cada producto tiene un nombre, descripción, precio y cantidad.

## Características

- **Gestión de Productos:** CRUD (Crear, Leer, Actualizar, Eliminar) para productos.
- **Validación de Datos:** Verificación de entradas y datos.

## Tecnologías

- **NestJS**
- **TypeScript**
- **TypeORM**
- **PostgreSQL**

## Instalación

### Clonar el Repositorio
git clone https://github.com/ecangarejo/ApiHorbath.git

cd ApiHorbath

## Configuración del Entorno
Asegúrate de tener Node v20.17.0, npm v10.8.2 y PostgreSQL instalados en tu máquina.

## Configuracuón de variables de Base de Datos
- **host: 'localhost'**
- **port: 5432**
- **username: 'postgres'**
- **password: 'root'**
- **database: 'productos_db'**

## Instalar Dependencias
npm install

## Ejecutar la Aplicación
npm run start:dev

La aplicación se ejecutará en http://localhost:3000.


## Endpoints
### Productos
- **POST http://localhost:3000/products - Crear un nuevo producto.**
- **GET http://localhost:3000/products - Obtener todos los productos.**
- **GET http://localhost:3000/products/{id} - Obtener un producto por ID.**
- **PUT http://localhost:3000/products/{id} - Actualizar un producto por ID.**
- **DELETE http://localhost:3000/products/{id} - Eliminar un producto por ID**

## Ejemplos de Solicitudes
### Crear un Producto
POST /products
{
	"nombre": "Computador",
  "descripcion": "Portátil",
  "precio": 1000000,
  "cantidad": 1
}

### Actualizar un Producto
PUT /products/{id}
{
	"nombre": "Teclado",
  "descripcion": "Marca keychron",
  "precio": 500000,
  "cantidad": 2
}

## Contacto
Si tienes preguntas o sugerencias, por favor contáctame en ecangarejo@gmail.com

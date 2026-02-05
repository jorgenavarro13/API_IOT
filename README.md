
# IoT Sensor API RESTful

Esta es una API RESTful desarrollada con **Node.js** y **Express** diseñada para gestionar y monitorear datos provenientes de diversos sensores IoT (Temperatura, Ultrasonico, PIR y Fotoresistencia). El proyecto incluye un dashboard web para la visualización de datos en tiempo real y está preparado para integrarse con bases de datos MySQL.

## 🚀 Características

* **Arquitectura Modular**: Controladores específicos para cada tipo de sensor (Temperatura, PIR, Ultrasonico, Fotoresistencia).
* **Gestión de Datos**: Capacidad para insertar nuevos registros y consultar históricos, incluyendo filtrado por rangos de fecha.
* **Dashboard Integrado**: Interfaz web (HTML/JS) que utiliza **Chart.js** para graficar métricas de nivel, temperatura, luz y estado de dispositivos.
* **Conectividad Robusta**: Implementa un pool de conexiones con `mysql2` para optimizar el rendimiento de la base de datos.

## 🛠️ Tecnologías utilizadas

* **Backend**: Node.js, Express.js.
* **Base de Datos**: MySQL (compatible con servicios como Aiven).
* **Middleware**: Body-parser, CORS.

## 📂 Estructura del Proyecto

* `/api`: Contiene la lógica de los controladores para cada sensor.
* `/database`: Manejador de la conexión a la base de datos y scripts de respaldo SQL.
* `app.js`: Punto de entrada de la aplicación.
* `router.js`: Definición de todas las rutas y endpoints de la API.
* `constants.js`: Configuración centralizada de queries y variables de entorno.
* `dashboard.html`: Panel de control frontal para visualizar los datos.

## ⚙️ Configuración e Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/jorgenavarro13/api_iot.git
cd api_iot

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Variables de Entorno:**
Crea un archivo `.env` basado en las claves requeridas en `constants.js`:
* `AIVEN_HOST`, `AIVEN_PORT`, `AIVEN_USER`, `AIVEN_PASSWORD`, `AIVEN_DATABASE`.


4. **Base de Datos:**
Importa el archivo `/database/dbbackup/iot_db.sql` en tu instancia de MySQL para crear las tablas necesarias (`trashi`, `temps`, `ultrasonic`, `fotoresistencia`, `pir`).
5. **Ejecutar la API:**
```bash
node app.js

```


La API estará disponible en `http://localhost:3000`.

## 🛣️ Endpoints Principales

Todos los endpoints base comienzan con `/iot/api`.

| Sensor | Método | Endpoint | Descripción |
| --- | --- | --- | --- |
| **General** | GET | `/getAllSensors` | Obtiene registros de todos los sensores. |
| **General** | POST | `/insertAllSensors` | Inserta nivel, temp, luz, gas y estado. |
| **Temperatura** | GET | `/getTemperatures` | Historial de temperatura. |
| **PIR** | POST | `/insertPIR` | Registra detección de movimiento. |

## 📊 Dashboard

Para visualizar los datos, abre el archivo `dashboard.html` en tu navegador. El panel se actualiza automáticamente cada 5 segundos realizando peticiones al endpoint general de la API.

---

*Proyecto desarrollado para el área de IoT - 2024*.

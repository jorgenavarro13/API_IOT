/**
 * Archivo de constantes del proyecto.
 * 
 * Aquí se configuran las constantes generales del proyecto, tales como:
 *   - Configuración de la base de datos.
 *  - Configuración del servidor.
 *  - URLs de los endpoints.
 *  - Queries SQL.
 * 
 * Ernesto Cantú
 */



/*
 * Configuración local de la Base de Datos MySQL
hola
 */

require('dotenv').config(); //Importante, para leer las variables de entorno desde el archivo .env, no modificar la estructura por nada

const dbHost = process.env.AIVEN_HOST;
const dbPort = process.env.AIVEN_PORT;
const dbUser = process.env.AIVEN_USER;
const dbPass = process.env.AIVEN_PASSWORD;
const dbName = process.env.AIVEN_DATABASE;



/*
 * Server General Configuration
 */
const serverPort = 3000 // puerto de ejecución del servidor web
const contextURL = '/iot'; //Contexto del proyecto
const api = '/api'; // Contexto del API

//SENSOR Temperatura. Configurar URLS por cada sensor.
const getTemperatureSensor = '/getTemperatures';
const getTemperatureSensorByDate = '/getTemperaturesBetweenDates';
const postTemperatureSensor = '/insertTemperature'; //Implemented Endpoint URL

//SENSOR Ultrasonico URLS. Configurar URLS por cada sensor.
const getUltrasonicSensor = '/getUltrasonic';
const getUltrasonicSensorByDate = '/getUltrasonicByDate';
const postUltrasonicSensor = '/insertUltrasonic';

//SENSOR Fotoresistencia URLS. Configurar URLS por cada sensor.
const getFotoresistenciaSensor = '/getFotoresistencias';
const getFotoresistenciaSensorByDate = '/getFotoresistenciasBetweenDates';
const postFotoresistenciaSensor = '/insertFotoresistencia';

//SENSOR PIR URLS. Configurar URLS por cada sensor.
const getPIRSensor = '/getPIR';
const getPIRSensorByDate = '/getPIRByDate';
const postPIRSensor = '/insertPIR';

//SENSOR General (All sensors) URLS. Configurar URLS por cada sensor.
const getAllSensors = '/getAllSensors';
const getAllSensorsByDate = '/getAllSensorsByDate';
const postAllSensors = '/insertAllSensors';

/*
 * DB Queries
 * Agregar queries por sensor.
 */
//Temperature Sensor Queries
const selectTemperature = 'SELECT * FROM temps';
const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
const insertTemperature = 'INSERT INTO temps (valor) values (?)';

//Ultrasonic Sensor Queries
const insertUltrasonic = 'INSERT INTO ultrasonic (distance) values (?)';
const selectUltrasonicByDate = 'SELECT * FROM ultrasonic WHERE fecha between ? and ?';
const selectUltrasonic = 'SELECT * FROM ultrasonic';

//Fotoresistencia Sensor Queries
const insertFotoresistencia = 'INSERT INTO fotoresistencia (valor) values (?)';
const selectFotoresistenciaByDate = 'SELECT * FROM fotoresistencia WHERE fecha between ? and ?';
const selectFotoresistencia = 'SELECT * FROM fotoresistencia';

//PIR Sensor Queries
const insertPIR = 'INSERT INTO pir (estado) values (?)';
const selectPIRByDate = 'SELECT * FROM pir WHERE fecha between ? and ?';
const selectPIR = 'SELECT * FROM pir';

//All Sensors Queries
const insertSensors = 'INSERT INTO trashi (level, temperature, light, gas, open) values (?,?,?,?,?)';
const selectSensorsByDate = 'SELECT * FROM trashi WHERE fecha between ? and ?';
const selectSensors = 'SELECT * FROM trashi';


module.exports = {
  // DB Config
  dbHost, dbPort, dbUser, dbPass, dbName,

  // Server Config
  serverPort, contextURL, api,

  // Temperature Endpoints & Queries
  getTemperatureSensor,
  getTemperatureSensorByDate,
  postTemperatureSensor,
  selectTemperature,
  selectTemperatureByDate,
  insertTemperature,

  // Ultrasonic Endpoints & Queries
  getUltrasonicSensor,
  getUltrasonicSensorByDate,
  postUltrasonicSensor,
  selectUltrasonic,
  selectUltrasonicByDate,
  insertUltrasonic,

  // Fotoresistencia Endpoints & Queries
  getFotoresistenciaSensor,
  getFotoresistenciaSensorByDate,
  postFotoresistenciaSensor,
  insertFotoresistencia,
  selectFotoresistencia,
  selectFotoresistenciaByDate,

  // PIR Endpoints & Queries
   getPIRSensor,
   getPIRSensorByDate,
   postPIRSensor,
  insertPIR,
  selectPIR,
  selectPIRByDate,

  // All Sensors Endpoints & Queries
  getAllSensors,
  getAllSensorsByDate,
  postAllSensors,
  insertSensors,
  selectSensors,
  selectSensorsByDate,
}

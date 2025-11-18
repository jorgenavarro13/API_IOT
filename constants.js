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
const dbHost = "localhost";
const dbPort = "3307";
const dbUser = "root";
const dbPass = "root";
const dbName = "iot";


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
}

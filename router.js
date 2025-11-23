/**
 * Archivo que configura todas las rutas del proyecto.
 * Aquí se configuran las URLs y los métodos HTTP (GET, POST, PUT, DELETE)
 * que van a procesar las peticiones web.
 * 
 * Ernesto Cantú
 */

//Importa a tu archivo route.js las dependencias que se requieren
const express = require('express');
const router = express.Router();
const constants =  require('./constants');
const sensorTemp = require('./api/sensorTemperatura'); // import del archivo que tiene la lógica de manejo de peticiones
const sensorUltrasonic = require('./api/sensorUltrasonico');
const sensorPIR = require('./api/sensorPIR');
const sensorFotoresistencia = require('./api/sensorFotoresistencia');
const sensorSensors = require('./api/allSensors');

//Al router le damos todas las urls y los métodos que van a procesar las peticiones web.
router.get(constants.contextURL + constants.api + constants.getTemperatureSensor, sensorTemp.getLogTemperatures);
router.post(constants.contextURL + constants.api + constants.getTemperatureSensorByDate, sensorTemp.getTemperaturesBetweenDates);
router.post(constants.contextURL + constants.api + constants.postTemperatureSensor, sensorTemp.insertNewTemperature);

//Ultrasonic Sensor Endpoints
router.get(constants.contextURL + constants.api + constants.getUltrasonicSensor, sensorUltrasonic.getLogDistances);
router.post(constants.contextURL + constants.api + constants.getUltrasonicSensorByDate, sensorUltrasonic.getDistancesBetweenDates);
router.post(constants.contextURL + constants.api + constants.postUltrasonicSensor, sensorUltrasonic.insertNewDistance);

//Fotoresistencia Sensor Endpoints
router.get(constants.contextURL + constants.api + constants.getFotoresistenciaSensor, sensorFotoresistencia.getLogFotoresistencias);
router.post(constants.contextURL + constants.api + constants.getFotoresistenciaSensorByDate, sensorFotoresistencia.getFotorresistenciaBetweenDates);
router.post(constants.contextURL + constants.api + constants.postFotoresistenciaSensor, sensorFotoresistencia.insertNewFotoresistencia);

//PIR Sensor Endpoints
router.get(constants.contextURL + constants.api + constants.getPIRSensor, sensorPIR.getLogPIR);
router.post(constants.contextURL + constants.api + constants.getPIRSensorByDate, sensorPIR.getPIRBetweenDates);
router.post(constants.contextURL + constants.api + constants.postPIRSensor, sensorPIR.insertNewPIR);

//All Sensors Endpoints
router.get(constants.contextURL + constants.api + constants.getAllSensors, sensorSensors.getLogSensors);
router.post(constants.contextURL + constants.api + constants.getAllSensorsByDate, sensorSensors.getSensorsBetweenDates);
router.post(constants.contextURL + constants.api + constants.postAllSensors, sensorSensors.insertNewSensors);

//le decimos a Node que queremos hacer uso de nuestro router en otros archivos (como por ejemplo, app.js)
module.exports = router;
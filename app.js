const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const app = express();
/* Cargar rutas */
const authRoutes = require("./src/routes/auth");
const departamentoMunicipioRoutes = require('./src/routes/departamentoMunicipio');
// const userRoutes = require("./src/routes/user");

/* Trabajar con la extención client-rest */
app.use(bodyParser.json());
/* Pruebas de request utilizando postman */
app.use(bodyParser.urlencoded({ extended: true }));

/* Evitar bloqueos en el navegador cuando estemos trabajando co
el backend y el front end a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/auth`, departamentoMunicipioRoutes);
// app.use(`api/${API_VERSION}/`, userRoutes);
// console.log(`/api/${API_VERSION}/datosabiertos`);

module.exports = app;
const express = require('express');
const coursesController = require('../controller/courses.controller')

const routes = express.Router();

routes.get("/", coursesController.get);

routes.post("/cursos", coursesController.insert);

routes.delete('/cursos/:id', coursesController.delete);

module.exports = routes;
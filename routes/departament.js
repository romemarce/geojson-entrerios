/*
  Rutas de departament
  host + /departament
*/
const { Router } = require("express");
const router = Router();

const action  = require("./../controllers/departament")

router.get("/departament", action); //funcion
module.exports = router;
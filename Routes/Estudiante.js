const { Router } = require("express");
const router = Router();
const {
  ObtenerEstudiante,
  CrearEstudiante,
  ActualizarEstudiante,
  EliminarEstudiante,
} = require("../Controllers/Estudiante-Controller");

router.get("/", ObtenerEstudiante);

router.post("/", CrearEstudiante);

router.put("/:id", ActualizarEstudiante);

router.delete("/:id", EliminarEstudiante);

module.exports = router;

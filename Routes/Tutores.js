const { Router } = require("express");
const router = Router();
const {
  ObtenerTutores,
  CrearTutores,
  ActualizarTutores,
  EliminarTutores,
} = require("../Controllers/Tutores-Ccontroller");

router.get("/", ObtenerTutores);
router.post("/", CrearTutores);
router.put("/:id", ActualizarTutores);
router.delete("/:id", EliminarTutores);

module.exports = router;

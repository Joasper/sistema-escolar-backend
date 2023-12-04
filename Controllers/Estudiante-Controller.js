const Estudiante = require("../Models/Estudiante");
const { request, response } = require("express");

const ObtenerEstudiante = async (req = request, res = response) => {
  let estudiante = await Estudiante.find();

  if (!estudiante) {
    return res.status(404).json({
      msg: "Estudiantes no encontrado",
    });
  }
  estudiante.reverse();

  try {
    res.json({
      msg: "Estudiant",
      estudiantes: estudiante,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ups... Parece que hubo un error ",
    });
  }
};

const CrearEstudiante = async (req = request, res = response) => {
  const { Matricula, Nombre, Apellido, FechaNacimiento, Sexo, Edad, Estadp } =
    req.body;

  const estudiante = new Estudiante(req.body);

  if (estudiante.Nombre.length <= 2 || estudiante.Apellido.length <= 2) {
    return res.status(400).json({
      msg: "El nombre o apellido del estudiante debe ser mayor de dos caracteres",
    });
  }

  const validarMatricula = await Estudiante.findOne({
    Matricula: estudiante.Matricula,
  });

  if (validarMatricula) {
    return res.status(401).json({
      msg: "La matricula ya le corresponde a un estudiante",
    });
  }
  console.log(estudiante);

  await estudiante.save();

  try {
    res.json({
      msg: "Estudiante",
      estudiante,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ups... Parece que hubo un error ",
    });
  }
};

const ActualizarEstudiante = async (req = request, res = response) => {
  const id = req.params.id;

  console.log(id);
  try {
    const buscarEstudiante = await Estudiante.findById(id);
    if (buscarEstudiante == null || buscarEstudiante === undefined) {
      return res.status(404).json({
        msg: "Estudiante no encontrado",
      });
    }
    const estudiante = await Estudiante.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      msg: "Estudiante",
      estudiante,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Ups... Parece que hubo un error ",
    });
  }
};

const EliminarEstudiante = async (req = request, res = response) => {
  const id = req.params.id;
  try {
    const buscarEstudiante = await Estudiante.findById(id);
    if (buscarEstudiante == null || buscarEstudiante === undefined) {
      return res.status(404).json({
        msg: "Estudiante no encontrado",
      });
    }
    await Estudiante.findByIdAndDelete(id);

    res.json({
      msg: "Estudiante borrado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Ups... Parece que hubo un error ",
    });
  }
};

module.exports = {
  ObtenerEstudiante,
  CrearEstudiante,
  ActualizarEstudiante,
  EliminarEstudiante,
};

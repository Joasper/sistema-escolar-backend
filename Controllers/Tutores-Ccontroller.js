const { response, request } = require("express");
const Tutores = require("../Models/Tutores");
const TutorEstudiante = require("../Models/TutorEstudiante");

const ObtenerTutores = async (req = request, res = response, next) => {
  const tutorEstudiante = await TutorEstudiante.find()
    .populate("IDTutor")
    .populate("IDEstudiante");
  try {
    res.json(tutorEstudiante);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "No se encontraron los tutores" });
  }
};

const CrearTutores = async (req = request, res = response, next) => {
  const { Cedula, Nombre, Apellido, Telefono, IDEstudiante } = req.body;
  console.log(Cedula, Nombre, Apellido, Telefono, IDEstudiante);
  const tutor = new Tutores({
    Cedula,
    Nombre,
    Apellido,
    Telefono,
  });
  console.log(tutor);
  const tutorEstudiante = new TutorEstudiante({
    IDTutor: [tutor._id],
    IDEstudiante: [IDEstudiante],
  });
  console.log(tutorEstudiante);
  await tutor.save();
  await tutorEstudiante.save();

  try {
    res.json({
      msg: "Tutor Creado Correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "Error al crear el tutor",
    });
  }
};

const ActualizarTutores = async (req = request, res = response, next) => {
  res.json({
    msg: "The tutors",
  });
};

const EliminarTutores = async (req = request, res = response, next) => {
  res.json({
    msg: "The tutors",
  });
};

module.exports = {
  ObtenerTutores,
  CrearTutores,
  ActualizarTutores,
  EliminarTutores,
};

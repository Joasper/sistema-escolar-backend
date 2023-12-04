const { Schema, model, models } = require("mongoose");
const TutoresSchema = new Schema({
  Cedula: {
    type: String,
    required: true,
    trim: true,
    maxlength: 11,
  },
  Nombre: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  Apellido: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  Telefono: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 10,
  },
});

module.exports = models.Tutores || model("Tutores", TutoresSchema);

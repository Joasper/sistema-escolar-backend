const { Schema, model, models } = require("mongoose");

const estudianteSchema = new Schema(
  {
    Matricula: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },

    Nombre: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },
    Apellido: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },
    FechaNacimeinto: {
      type: Date,
      required: true,
      default: Date.now,
      trim: true,
    },
    Sexo: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },
    Edad: {
      type: String,
      required: true,
      trim: true,
    },
    Estado: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
    },
  },
  { timestamps: true }
);

module.exports = models.Estudiante || model("Estudiante", estudianteSchema);

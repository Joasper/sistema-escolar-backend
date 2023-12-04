const { Schema, model, models } = require("mongoose");

const TutorEstudianteSchema = new Schema({
  IDTutor: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tutores",
      required: true,
    },
  ],
  IDEstudiante: [
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiante",
      required: true,
    },
  ],
});

module.exports =
  models.TutorEstudiante || model("TutorEstudiante", TutorEstudianteSchema);

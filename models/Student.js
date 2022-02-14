const { model, Schema } = require("mongoose");

const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    std_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    courses: {
      type: [""],
      required: true,
      default: ["Javafullstack"],
    },
  },
  { timestamps: true }
);

module.exports = model("student", StudentSchema);

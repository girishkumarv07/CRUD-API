const { Router } = require("express");
const { getAllStudents, createStudent, getStudent, updateStudent, deleteStudent } = require("../controllers/student");
const router = Router();

router.route("").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
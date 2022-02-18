const { Router } = require("express");
const { getAllStudents, createStudent, getStudent, updateStudent, deleteStudent } = require("../controllers/student");
const router = Router();
const multer = require("multer");
const { storage } = require("../middlewares/multer");

const upload = multer({ storage });

router.route("").get(getAllStudents).post(upload.single("photo"),createStudent);
router.route("/:id").get(getStudent).put(upload.single("photo"),updateStudent).delete(deleteStudent);

module.exports = router;
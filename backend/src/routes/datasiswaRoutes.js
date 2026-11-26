const express = require('express');
const router = express.Router();
const datasiswaController = require("../controller/datasiswaController");
const {validationsSiswaCreate, validationsSiswaUpdate} = require("../mildware/validations");

// ga harus validation
router.get("/", datasiswaController.getAll);
router.get("/:id", datasiswaController.getById);
router.delete("/:id", datasiswaController.delete);

// butuh mildware validations
router.post("/", validationsSiswaCreate, datasiswaController.create);
router.put("/:id", validationsSiswaUpdate, datasiswaController.update);

module.exports = router;
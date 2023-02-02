const express = require("express");
// const fs = require("fs");

const router = express.Router();

// // Ajout de multer
const multer = require("multer");

// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "images/" });

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const projectControllers = require("./controllers/projectControllers");
const commentaireController = require("./controllers/commentaireControllers");

router.get("/projects", projectControllers.browse);
router.get("/project/:id", projectControllers.read);
router.put("/project/:id", projectControllers.edit);
// route POST pour recevoir un fichier dont le nom est "avatar"
router.post(
  "/project",
  upload.single("image"),
  projectControllers.uploadFile,
  projectControllers.add
);

router.delete("/project/:id", projectControllers.destroy);

router.post("/commentaire", commentaireController.add);

module.exports = router;

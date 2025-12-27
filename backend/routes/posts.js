const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.get("/", getPosts);
router.post("/", protect, upload.array("images",5), createPost);

module.exports = router;

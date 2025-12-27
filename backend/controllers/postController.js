const Post = require("../models/Post");

const getPosts = async (req,res) => {
  const posts = await Post.find().populate("user","name email");
  res.json(posts);
};

const createPost = async (req,res) => {
  const { title, description, price, location, mainRoadDistance, rooms, bathrooms, size, lat, lng } = req.body;
  const images = req.files ? req.files.map(file => file.path) : [];
  const post = await Post.create({
    title,
    description,
    price,
    location,
    mainRoadDistance,
    rooms,
    bathrooms,
    size,
    images,
    coordinates: { lat, lng },
    user: req.user._id
  });
  res.status(201).json(post);
};

module.exports = { getPosts, createPost };

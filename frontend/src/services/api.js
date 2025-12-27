import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);

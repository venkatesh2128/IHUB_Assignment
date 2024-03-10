require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
console.log("NodeJS Server is starting...");

router.get("/api/ghost/posts", (req, res) => {
  const getPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2368/ghost/api/v3/content/posts/",
        {
          params: {
            key: process.env.GHOST_CONTENT_API_KEY,
          },
        }
      );
      res.json({ posts: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  getPosts();
});

router.get("/api/ghost/post/:id/", (req, res) => {
  const getPostsByID = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2368/ghost/api/v3/content/posts/${req.params.id}`,
        {
          params: {
            key: process.env.GHOST_CONTENT_API_KEY,
          },
        }
      );
      res.json({ posts: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  getPostsByID();
});

router.get("/api/ghost/posts/title/:title", (req, res) => {
  const getPostsByTitle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2368/ghost/api/v3/content/posts`,
        {
          params: {
            key: process.env.GHOST_CONTENT_API_KEY,
            filter: `title:${req.params.title} ,id:${req.params.title}`,
          },
        }
      );
      res.json({ posts: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  getPostsByTitle();
});

router.get("/api/ghost/posts/lastweek", (req, res) => {
  const getPostsByLastWeek = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2368/ghost/api/v3/content/posts`,
        {
          params: {
            key: process.env.GHOST_CONTENT_API_KEY,
            filter: `published_at:>now-7d`,
          },
        }
      );
      res.json({ posts: response.data.posts });
    } catch (error) {
      console.log(error);
    }
  };
  getPostsByLastWeek();
});

app.use(express.json());
app.use("/", router);
app.listen(5000);

console.log("NodeJS Server is running on port 5000...");

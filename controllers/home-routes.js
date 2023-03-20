const router = require("express").Router();
const Blog = require("../models/blog");

// route to get all blogs
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  const allBlogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render("all", { allBlogs });
});

// route to get one blog
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "No blog with this id!" });
      return;
    }
    const singleblog = blogData.get({ plain: true });
    res.render("blog", singleblog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

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


module.exports = router;

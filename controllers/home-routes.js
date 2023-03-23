const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// route to get all blogs
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get one blog
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "No blog with this id!" });
      return;
    }
    const singleblog = blogData.get({ plain: true });
    res.render("any blog", singleblog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

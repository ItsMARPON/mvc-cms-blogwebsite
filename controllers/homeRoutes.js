const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// route to get all blogs and JOIN with user data
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
    });

    // Serialize data so the template can read it
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
router.get("/blogs/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["name"] }],
    });
    const blog = blogData.get({ plain: true });

    res.render("blog", {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find user by session ID (already logged into website)
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    // find blog posts by id
    const postData = await Blog.findAll({ where: { user_id: user.id } });

    const posts = postData.map((post) => post.get({ plain: true }));
    // express knows to render this handlebars profile
    res.render("profile", {
      ...user,
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/login", (req, res) => {
  // If user logged in, redirect to a different route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;

const router = require('express').Router();
const Blog = require('../../models/blog');


router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json({ newBlog, success: true });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


module.exports = router;





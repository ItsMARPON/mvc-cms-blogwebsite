const router = require('express').Router();
const Blog = require('../../models/blog');


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





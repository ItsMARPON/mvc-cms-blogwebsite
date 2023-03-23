const router = require('express').Router();
const Blog = require('../../models/blog');
const withAuth = require('../../utils/auth');


router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.sendStatus(400).send(err);
  }
});

router.put("/", withAuth, async (req, res)=>{
  try{
    await Blog.update(req.body, {
      where: {id: req.params.id},
    });
    res.status(200).json({success: true});
  } catch (err){
    console.log(err);
    res.status(400).send(err);
  }
});



router.delete('/:id', withAuth, async (req, res)=> {
  try{
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData){
      res.status(404).json({ message: 'No BlogPost found with this id'});
      return;
    }

    res.status(200).json(blogData);
  }catch(err){
    res.status(500).json(err);
  }
});



module.exports = router;





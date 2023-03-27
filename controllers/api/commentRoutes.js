const router = require("express").Router();
const Comment = require("../../models/comment");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res)=> {
  try{
    await Comment.update(req.body, {
      where: {id: req.params.id},
    });

    res.status(200).json({sucess: true});
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

router.delete('/:id', withAuth, async(req, res)=> {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData){
            res.status(404).json({message: 'No Comment found with this id'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err){
      console.log(err);
        res.status(500).json(err);
    }
});








module.exports = router;

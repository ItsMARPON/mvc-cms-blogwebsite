const router = require("express").Router();
const User = require("../../models/user");

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json({ newUser, success: true });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;

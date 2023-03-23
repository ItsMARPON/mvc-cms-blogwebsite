const {Comment} = require("../models");

const commentData = [
{
    "comment_text": "Wow that was an awesome read!",
    "blog_id": 1,
    "user_id": 1
},
{
    "comment_text": "I can't wait to use MySQL2!",
    "blog_id": 2,
    "user_id": 2
},
{
    "comment_text": "Whoa, can't believe MySQL2 is so robust!",
    "blog_id": 2,
    "user_id": 2
},
];

const seedComments = ()=> Comment.bulkCreate(commentData);


module.exports = seedComments;
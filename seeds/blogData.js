const { Blog } = require("../models");

const blogData = [
  {
    user_id: 1,
    title: "Model-View-Controller (MVC) paradigm architectural structure",
    post: "The Model-View-Controller (MVC) is a software architectural pattern used for developing user interfaces that divide therelated program logic into three interconnected elements. This is to separate internal representations of information from the way information is presented to the user and information accepted from the user. (refer to sources: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller')",
    post_date: ""
  },
  {
    user_id: 2,
    title: "MySQL2 a great for database building",
    post: "MySQL software delivers a fast, multithreaded, multi-user, and robust SQL (Structured Query Language) database server. MySQL is intended for mission-critical, heavy-load production systems as well as for embedding into mass-deployed software. MySQL is a trademark of Oracle Corporation and its affiliates. (refer to sources: 'https://dev.mysql.com/doc/refman/8.0/en/introduction.html')",
    post_date: ""
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;

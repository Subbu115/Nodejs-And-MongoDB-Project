
const Post = require('../database/models/Post')

module.exports = (req, res) => {
  Post.create({
    ...req.body,
    image: req.body.image,
    author: req.session.userId
  }, (error, post) => {
    res.redirect("/");
  });
}
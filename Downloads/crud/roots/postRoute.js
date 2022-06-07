const postController = require('../controllers/postController');

module.exports = (server) => {
    server.route("/posts")
    .get(postController.readAllPost) // Get all posts
    .post(postController.createAPost); // Create a post
    
    server.route("/posts/:post_id") // req.params.post_id
    .get(postController.readAPost) // Get one posts
    .put(postController.updateAPost) // Update one post
    .delete(postController.deleteAPost); // Delete one post
}
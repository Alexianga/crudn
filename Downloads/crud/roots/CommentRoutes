const commentController = require('../controllers/commentController');

module.exports = (server) => {
    server.route("/comments")
    .get(commentController.readAllComment) // Get all comments
    .post(commentController.createAComment); // Create a comment
    
    server.route("/comments/:comment_id") // req.params.comment_id
    .get(commentController.readComment) // Get one comments
    .put(commentController.updateAComment) // Update one comment
    .delete(commentController.deleteAComment); // Delete one comment
}
const userController = require('../controllers/userController');

module.exports = (server) => {
    server.route("/users")
    .get(userController.readAllUsers) // Get all posts
    .post(userController.createAUser); // Create a post
    
    server.route("/users/:user_id") // req.params.post_id
    .get(userController.readAUser) // Get one posts
    .put(userController.updateAUser) // Update one post
}
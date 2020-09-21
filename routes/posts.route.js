var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller'); 
/**
 * GET Route to list all users
 */
router.get('/', postController.findAllPosts);

/**
 * GET Route to find user by id
 */
router.get('/:idUser', postController.findOnePost);
/**
 * POST Route to create user
 */
router.post ('/',postController.createPost);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',postController.updatePost);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',postController.deleteAllPosts);
/**
 * GET Route to find All Users By Created Date
 */
router.get ('/:creation_date',postController.findAllPostsByPublishedDate);

// Export router
module.exports = router;
  
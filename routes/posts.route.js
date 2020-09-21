var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller'); 
/**
 * GET Route to list all posts
 */
router.get('/', postController.findAllPosts);

/**
 * GET Route to find post by id
 */
router.get('/:idUser', postController.findOnePost);
/**
 * POST Route to create post
 */
router.post ('/',postController.createPost);
/**
 * PUT Route to update a post by id
 */
router.put ('/:idUser',postController.updatePost);
/**
 * DELETE Route to delete all posts
 */
router.delete ('/',postController.deleteAllPosts);
/**
 * GET Route to find All Posts By PublishedDate
 */
router.get ('/:creation_date',postController.findAllPostsByPublishedDate);

// Export router
module.exports = router;
  
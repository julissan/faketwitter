var express = require('express');
var router = express.Router();
const postController = require ('../controllers/post.controller'); 
/**
 * GET Route to list all users
 */
router.get('/', postController.findAllUsers);

/**
 * GET Route to find user by id
 */
router.get('/:idUser', postController.findOneUser);
/**
 * POST Route to create user
 */
router.post ('/',postController.createUser);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',postController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',postController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',postController.deleteAllUsers);
/**
 * GET Route to find All Users By Created Date
 */
router.get ('/:creation_date',postController.findAllUsersByCreatedDate);

// Export router
module.exports = router;
  
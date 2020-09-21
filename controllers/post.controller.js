const dbManager = require ('../database.config/database.manager');
const { POST } = require('../database.config/db.config');

/**
 * Creation of a post
 * @param {*} postObject JSON Object with Post information
 */
async function createPost (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newPostObject = {
        message: req.body.message,
        published_date: req.body.published_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Post.create(newPostObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * Get all posts
 */
async function findAllPosts (req, res){
    try {
        //Execute query
        const posts = await dbManager.Post.findAll ();
        
        //Send response
        res.json({
                data: posts
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get post by id
 */
async function findOnePost (req, res){
    try {
        const { idPost } = req.params;

        //Execute query
        const post = await dbManager.Post.findOne({
            where: {
                idPost: idPost
            }
        });
        //Send response
        res.json(post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update post
 */
async function updatePost (req, res){

    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    try {
        const post = await dbManager.Post.create({ idPost: req.params });
        post.message = req.body.message;
        post.published_date = req.body.published_date;
        await post.save();
    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function deleteAllPosts (req, res){
    try {
        //delete all posts
        await dbManager.Post.destroy({where: {}})
        //Send response
        res.json('all posts deleted');

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function findAllPostsByPublishedDate (req, res){
    try {
        const { published_date } = req.params;

        //Execute query
        const posts = await dbManager.Post.findAll({
            where: {
                published_date: published_date
            }
        });
        //Send response
        res.json({
                data: posts
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


exports.createPost = createPost; 
exports.findAllPosts = findAllPosts; 
exports.findOnePost = findOnePost; 
exports.updatePost = updatePost;
exports.deleteAllPosts = deleteAllPosts;
exports.findAllPostsByPublishedDate = findAllPostsByPublishedDate;
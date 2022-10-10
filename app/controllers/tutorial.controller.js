const db = require('../models/index.js');
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    //Validate request
    //Here you may want to set any kind of validator for the
    //data you are expecting to get from the request.
    //But for now we will just be validating that we recieve a title.
    if(!req.body.title){
        res.status(400).send({message: 'Title cannot be empty!'});
        return;
    }

    //Create tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? true : false
    });

    //tutorial is a mongoose model object which comes with
    //crud operations so we don't have to code it.

    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error ocurred while creating your Tutorial."
            });
        });
};

exports.findAll = (req, res) => {

    //Here it's supposed to be a middleware or something that
    //checks for us if the user who is calling this function 
    //is allowed to do it (Admin of the API/Web app, whoever you 
    //want to give access to)

    Tutorial.find()
        .then(data => {
            res.send(data);
        })
        .catch(() => {
            res.status(401).send({
                message: 'Unauthenticated or unauthorized.'
            })
        })

}
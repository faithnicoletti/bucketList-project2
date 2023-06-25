const Dream = require('../models/dream');

module.exports = {
    index
    // new : newDream
};

async function index (req, res){
    try{
        const dream = await Dream.findOne({});

        const careers = dream.careers;
        const travels = dream.travels;
        const taste = dream.taste;
        const hobbies = dream.hobbies;
        const fitness = dream.fitness;

        res.render('dreams/index', {careers, travels, taste, hobbies, fitness});
    } catch (err) {
        console.log(err);
        res.render('dreams/index', {errorMsg: err.message});
    }
}

// function newDream (req, res) {
//     res.render()
// }

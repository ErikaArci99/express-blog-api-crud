const posts = require('.../data/posts.js');

// index

function index(req,res){
    res.send('Lista dei post');
}

// show
function show(req,res){
    res.send(`post con ID ${req.params.id}`);
}
const posts = require('.../data/posts.js');

// index

function index(req,res){
    res.send('Lista dei post');
}

// show
function show(req,res){
    res.send(`post con ID ${req.params.id}`);
}

// store
function store(req,res){
    res.send('Inserimento di un nuovo post');
}

// update
function update (req,res){
    res.send(`modifica totale del post con ID ${req.params.id}`);
}

// modify
function modify (req,res){
    res.send(`modifica parziale del post con ID ${req.params.id}`);
}

// destroy
function modestroydify (req,res){
    res.send(`cancellazione del post con ID ${req.params.id}`);
}
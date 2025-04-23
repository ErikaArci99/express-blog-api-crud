const posts = require('../data/posts.js');

// index

function index(req,res){
    res.json(posts);
}

// show
function show(req,res){
    const id = parseInt(req.params.id);

    const post = posts.find((post) => {
        return post.id == id;
    })
    res.json(post);
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
function destroy (req,res){
    const id = parseInt(req.params.id);

    const post = posts.find((post) => {
        return post.id == id;
    })
    
    // cancello il post
    post.splice(post.indexOf(post), 1);

    // restituisco il codice di stato 204
    res.sendStatus(204);

}

module.exports = { index, show, store, update, modify, destroy}
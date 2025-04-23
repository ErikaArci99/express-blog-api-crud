const posts = require('../data/posts.js');

// index

function index(req,res){
    res.json(posts);
}

// mostra un singolo post
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404).json({
            error: "Not Found",
            message: "Post non trovato"
        });
        return;
    }

    res.json(post);
}

// store
function store(req, res) {
    // Definiamo un nuovo ID per il post
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    // Creiamo un nuovo oggetto post utilizzando i dati inviati nella richiesta (req.body)
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // Aggiungiamo il nuovo post all'array 'posts'
    posts.push(newPost);
    console.log('Post aggiunto:', newPost);

    // Rispondiamo con il codice di stato 201 (Created) e il nuovo post creato
    res.status(201).json(newPost);
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
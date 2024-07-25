var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var ingredients = [
    {
        "id": "232kAk",
        "text": "Eggs"
    },
    {
        "id": "dkP345",
        "text": "Milk"
    },
    {
        "id": "dkcuu7",
        "text": "Bacon"
    },
    {
        "id": "73hdy",
        "text": "Frogs Legs"
    }
];

app.get('/', function(request, response) {
    response.send('Yet another node API');
    response.end();
});

app.get('/ingredients', (request, response) => {
    response.send(ingredients);
    response.end();
});

app.post('/ingredients', (req, res) => {
    let ingredient = req.body;
    if (!ingredient || ingredient.text == "") {
        res.status(413).send({
            error: "No text in ingredient"
        })
    }
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
});

app.put('/ingredients/:id', (req, res) => {
    let id = req.params.id;
    let text = req.body.text;
    if (!id || id == "" || !text || text == "") {
        res.status(400).send({
            error: 'Invalid id or text'
        });
    }
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].id === id) {
            ingredients[i].text = text;
        }
    }
    res.send(ingredients);
});

app.delete('/ingredients/:id', (req, res) => {
    let id = req.params.id;
    
    if (!id || id == "") {
        res.status(400).send({error: "Invalid id"});
    }
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].id === id) {
            ingredients.splice(i, 1);
        }
    } 
    res.send(ingredients);
});



app.listen(3000, function() {
    console.log('App is listening on port 3000');
});

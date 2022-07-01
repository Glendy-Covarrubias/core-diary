const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("HOLA NODE - EXPRESS");
});

app.get('/user', (req, res) => {
    res.json(
        {
            name: "Glendy", 
            lastname: "Covarrubias"
        }
        );
});

app.post('/user/:id', (req, res) => {
    //console.log(req.body);
    console.log(req.params);
    res.send("Se ha enviado de manera correcta tus datos");
});

app.listen(3000, () => {
    console.log("Server port 3000");
});
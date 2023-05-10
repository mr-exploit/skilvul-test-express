const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const port = 5000;
const usersStatic = [
    {
        id : 1,
        name : "arief",
        hobby: "Eat"
    },
    {
        id : 2,
        name : "dwi",
        hobby: "war"
    },
    {
        id : 3,
        name : "barudak",
        hobby: "sleep"
    },
]

app.get("/", (req, res) =>{
    res.send("hello selamat kamu berhasil menampilkan data");
})

app.get("/users", (req, res) =>{
    res.json(
        usersStatic
    )
})

app.get("/users/:id", (req, res) =>{
    let response = usersStatic[req.params.id -1];
    res.json(response);
})

app.post("/", (req, res) =>{
    res.send("hello selamat kamu berhasil menambahkan data");
})

app.post("/users", (req, res) =>{
    console.log(req.body);

    let response = {
        id: usersStatic.length + 1,
        name : req.body.name,
        hobby: req.body.hobby
    }
    usersStatic.push(response);
    res.json(response);
})

app.put("/users/:id", (req, res) =>{
    let incomingUpdateDate = {
        id : parseInt(req.params.id),
        name : req.body.name,
        hobby: req.body.hobby
    }

    let ubah = usersStatic[req.params.id -1] = incomingUpdateDate
    res.json(ubah);

})
app.put("/", (req, res) =>{
    res.send("hello selamat kamu berhasil mengubah data");
})

app.delete("/users/:id", (req, res) =>{
    usersStatic.splice(req.params.id -1, 1);
    res.status(204);
    res.send();
})

app.delete("/", (req, res) =>{
    res.send("hello selamat kamu berhasil menghapus data");
})

app.listen(port, () =>{
    console.log(`kamu berhasil dijalankan di port : ${port}`);
})
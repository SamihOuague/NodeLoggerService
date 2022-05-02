let express = require("express");
let app = express();
let cors = require("cors")


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({msg: "OK"});
});

app.post("/sell", (req, res) => {
    console.log(req.body);
    res.send({msg: "logged"});
});

app.post("/take-profit", (req, res) => {
    console.log(req.body);
    res.send({msg: "logged"});
});

app.post("/stop-loss", (req, res) => {
    console.log(req.body);
    res.send({msg: "logged"});
});

app.listen(3001)
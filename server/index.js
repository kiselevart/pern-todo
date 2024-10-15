const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()) //req.body

app.post("/todos", (req, res) => {
    try {
        console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)",
            [description]
        );

        res.json(newTodo);
    } catch (err) {
       console.error(err.message); 
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
});
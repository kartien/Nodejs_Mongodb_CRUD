import express from "express";

const app = express()


app.listen(3000)

app.get('/', (req, res) => {
    res.send('Hello world')
})

console.log("Server on port", 3000)


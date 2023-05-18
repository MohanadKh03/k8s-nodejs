const app = require("express")();

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(8080, ()=>console.log("Listening on 8080"))

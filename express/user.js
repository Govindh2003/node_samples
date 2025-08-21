const express = require("express")
const app = express()
app.use(express.json())

let users = ["shiva", "govindh", "atulya"]

// get all
app.get("/getAllUsers",(req,res)=>{
    res.json(users)
})

// POST - insert
app.post("/insertUser", (req, res) => {
    let name = req.body.name
    if (users.includes(name)) {
        res.send("User already exists")
    } else {
        users.push(name)
        res.send("Inserted")
    }
})

// PUT - update
app.put("/updateUser", (req, res) => {
    let oldName = req.body.oldName
    let newName = req.body.newName
    let index = users.indexOf(oldName)
    if (index == -1) {
        res.send("User not found")
    } else {
        users[index] = newName
        res.send("Updated")
    }
})


app.delete("/deleteUser", (req, res) => {
    let name = req.body.name
    let index = users.indexOf(name)
    if (index == -1) {
        res.send("User not found")
    } else {
        users.splice(index, 1)
        res.send("Deleted")
    }
})


app.delete("/deleteAll", (req, res) => {
    users = []
    res.send("All Deleted")
})

app.listen(3000)






app.get("/checkIfNameIsPresent", (req, res) => {
    let name = req.query.name
    res.send(users.includes(name) ? "true" : "false")
})

app.get("/checkIfNameIsPresent", (req, res) => {
    let name = req.query.name
    if (users.includes(name)) {
        res.send("true")
    } else {
        res.send("false")
    }
})


const express = require('express');
const app = express();
let users=["shiva","govindh","atulya"]
app.get("/getAllUsers",(req,res)=>{
    res.json(users)
})


app.get("/insertUser",(req,res)=>{
    let name=req.query.name
    let index = users.indexOf(name)
    if (index == -1 && name != "") {
        users.push(name)
        res.send("Successfully Inserted")
    } else {
        res.send("Not Inserted")
    }
})

app.get("/updateUser", (req, res) => {
    let oldName = req.query.name
    let newName = req.query.newName
    let index = users.indexOf(oldName)

    if (index == -1) {
        res.send("User not found")
    } else {
        users[index] = newName
        res.send("Successfully Updated")
    }
})


app.listen(3000)






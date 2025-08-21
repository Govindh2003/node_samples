const express = require('express')
const app = express();
app.use(express.json());

let users = [{
    "id": 1,
    "name": "Rahul",
    "age": 20,
    "mail": "rahul@gmail.com"
}, {
    "id": 2,
    "name": "KK",
    "age": 21,
    "mail": "kk@gmail.com"
}]

app.get("/getUserNames", function (req, res) {
    // res.json("Names are : "+names)
    res.json(users);
})



app.post("/insertUser", function (req, res) {
    let newUser = req.body
    // Check duplicate name
    let nameExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.toLowerCase() === newUser.name.toLowerCase()) {
            nameExists = true;
            break;
        }
    }

    // Check duplicate email
    let emailExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail.toLowerCase() === newUser.mail.toLowerCase()) {
            emailExists = true;
            break;
        }
    }

    if (nameExists) {
        return res.json("Name already exists");
    }

    if (emailExists) {
        return res.json("Email already exists");
    }
    //Id generation
    let lastId = users[users.length-1].id
    lastId = lastId+1
    newUser.id = lastId
    // console.log("ID = ", lastId)
    users.push(newUser);
    res.json("User added successfully "+newUser.name);

})

app.delete("/deleteUser", function (req, res) {
    let id = parseInt(req.body.id)
    console.log(id)
    Indextodelete = users.map(user=>user.id).indexOf(id)
    personToDelete = users[Indextodelete].name
    if(Indextodelete == -1){
        console.log(Indextodelete)
        res.end("User Not existing")
    }else{
        users.splice(Indextodelete,1)
        res.end("User Deleted "+users[personToDelete].name)

    }


})

app.listen(4000)
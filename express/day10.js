const express = require('express')
const app = express();
app.use(express.json());

let users = [];


app.get("/getUserNames", function (req, res) {
    // res.json("Names are : "+names)
    res.json(users);
})

function getUserId() {
    let lastId = 0;
    if (users.length > 0) {
        lastId = users[users.length - 1].id
    }
    lastId = lastId + 1
    return lastId
}
function isEmailDuplicate(email) {
    let emailExists = false;
    if (users.map(user => user.email.toLowerCase()).includes(email.toLowerCase())) {
        emailExists = true;
    }
    return emailExists;
}
function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;;
    
    return emailRegex.test(email);
}
app.post("/insertUser", function (req, res) {

    let data = req.body
    if (data.hasOwnProperty("name")) {
        if (data.hasOwnProperty("age")) {
            if (data.hasOwnProperty("mark")) {
                if (data.hasOwnProperty("email")) {
                    if (isEmailDuplicate(data.email)) {
                        res.send("Email already exist")
                    } else {
                        if (data.name.length >= 3) {
                            if (Number.isFinite(data.age)) {
                                if (Number.isFinite(data.mark)) {
                                    if (data.age >= 17 && data.age <= 30) {
                                        if (data.mark >= 0 && data.mark <= 100) {
                                            if (isValidEmail(data.email)) {
                                                //success
                                                let user={
                                                    "name":data.name,
                                                    "age":data.age,
                                                    "mark":data.mark,
                                                    "email":data.email,
                                                    "id":getUserId()
                                                }
                                                
                                                users.push(user)
                                                res.send("Insert success " + data.name)
                                            } else {
                                                res.send("Please enter proper email")
                                            }
                                        } else {
                                            res.send("Mark should be within the range 0 to 100")
                                        }
                                    } else {
                                        res.send("Age should be within the range 17 to 30")
                                    }
                                } else {
                                    res.send("Mark must be numeric")
                                }
                            } else {
                                res.send("Age must be numeric")
                            }
                        } else {
                            res.send("Name must have 3 or more characters")
                        }
                    }
                } else {
                    res.send("Mail is mandatory")
                }
            } else {
                res.send("Mark is mandatory")
            }
        } else {
            res.send("Age is mandatory")
        }
    } else {
        res.send("Name is mandatory")
    }

})

app.get("/getUserByLetter", function (req, res) {
    let letter = req.query.letter;
    if (!letter) return res.end("Letter is required");

    let filteredUsers = users.filter(u => u.name.toLowerCase().startsWith(letter.toLowerCase()));
    let userNames = filteredUsers.map(u => u.name).join(", ");

    res.end(`Users starting with ${letter} are : ${userNames || "None"}`);
});


app.get("/Average", function (req, res) {
    let marks = users.map(user => user.mark);

    if (marks.length === 0) {
        return res.end("No users to calculate average");
    }

    let sum = marks.reduce((acc, m) => acc + m, 0);
    let average = sum / marks.length;

    res.end("Average = " + average);
});

//  Delete user by ID
app.delete("/deleteUser", function (req, res) {
    let id = parseInt(req.body.id);
    if (!id) return res.end("ID is required");

    let indexToDelete = users.findIndex(user => user.id === id);

    if (indexToDelete === -1) {
        return res.end("User not existing");
    }

    let deletedUser = users[indexToDelete];
    users.splice(indexToDelete, 1);

    res.end("User Deleted " + deletedUser.name);
});






app.listen(4000)
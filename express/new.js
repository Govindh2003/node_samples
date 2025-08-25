const express=require('express')
const app=express()
app.use(express.json());

let users=[
  {
    id:1,
  name:"govindh",
  age:19,
  marks:45,
  email:"gp@gmail.com"
  },
  {
    id:2,
  name:"Gopu",
  age:21,
  marks:45,
  email:"gopu@gmail.com"
  }
]

app.get("/getAllUsers",(req,res)=>{
  res.json(users)
})

app.post("/insertUser",(req,res)=>{
  let user=req.body
  
  let email=user.email
  let index=users.map(user=>user.email).indexOf(email)
  if(index==-1){
    
    users.push(user)
    res.send("Sucessfully inserted")
  }
  else{
    res.send("Emailid Already Exists")
  }
})

app.listen(3000)


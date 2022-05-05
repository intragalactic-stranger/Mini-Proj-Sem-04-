const express = require("express")
const cors = require("cors")
const path = require("path")
const User=require("./models/user")
var flash = require("express-flash")
var session = require("express-session")
const passport = require("passport")
const configb = require("./var")
const initializePassword = require('./config/passport-config')
initializePassword(passport)
const app = express()
app.use(session({
    secret:'dlsfjskjdflkds',
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
const wall = require("./routes/wall")
const submit = require("./routes/submit")


app.use(cors({
    origin: "*",
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/public/css')))
app.use(express.static(path.join(__dirname, '/public/js')))

app.get("/", (req, res) => {
    res.status(200).sendFile("/index.html")
})
app.post("/signup",(req,res)=>{
    const params = req.body;
    console.log(params)
    const add_user = new User({
        username: params.name,
        email: params.email,
        password:params.password
    })
    add_user.save((err,data)=>{
        if(err){
            console.log("--->> ",err)
            return res.send("User Already Exsist")
        }
        else{
            return res.send("Signup Successfully")
        }
    })
    // return res.send("Testing")
})
app.get('/signin',(req,res)=>{
    return res.send("Signin")
})
app.post("/signin",passport.authenticate("local",{
    successsRedirect:'/dashboard',
    failureRedirect:"/",
    failureFlash:true
}))
app.get('/dashboard',(req,res)=>{
    return res.send("dashboard here")
})
app.use("/wall", wall)
app.use("/submit", submit)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
})
const CONNECTION = "mongodb+srv://jutika:zk8ev3At6w4YB1En@cluster0.rk4ej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoose = require("mongoose");
mongoose.connect(CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},

(err)=>{
    if(err){
        console.log("Some Error Database connection",er)
    }
    else{
        console.log("Connected Database Done")
    }
})
// module.exports = { CONNECTION }
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

function initialize(passport) {
    const authenticateUser = async(req,email,password,done)=>{
        const user = await User.findOne({$and:[{
            'email': email,
        'password': password}]})
        if (!user){
            console.log("no user")
            return done(null,false,req.flash("Username or password is incorrect"))
        }
        else{
            console.log("find user",user)
            return done(null,user);
        }
    }
    passport.use(
        new LocalStrategy({
            usernameField:"email",
            passwordField : "password",
            passReqToCallback:true
        },authenticateUser)
    )
    passport.serializeUser((user,done)=>done(null,user.id));
    passport.deserializeUser(async  (id,done)=>{
        const user = await User.findOne({id:id})
        if (!user){
            return done(err)
        }
        console.log("checking")
        return done(null,user.id);
    }) 

}
module.exports = initialize;
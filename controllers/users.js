"use strict";

const _ = require('lodash');
module.exports = function(_,passport){
    return{
        SetRouting:function(router){
            router.get("/",this.indexPage);
            router.get("/signup",this.getSignup)
            router.post("/signup",this.postSignup);
            router.get('/home',this.homePage);
        },
        indexPage:function(req,res){
            return res.render('index',{test:'this is testdddddddddddd'});
        },
        getSignup:function(req,res){
            return res.render('signup');

        },
        postSignup:passport.authenticate('local.signup',{
            successfullRedirect :'/home',
            failureRedirect:"/signup",
            failureFlash:true
        }),
        homePage:function(req,res){
            return res.render('home');
        }
        
    }

}


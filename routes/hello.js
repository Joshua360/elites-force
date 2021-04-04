const express = require('express');
const router  = express.Router();


router.get('/', (req,res)=>{
    const name = req.cookies.username;
    if(name){
        res.redirect('/hello');
    }else{
        res.render('hello');
    }

});


router.post('/', (req,res)=>{
    res.cookie("username", req.body.username);
    res.redirect('/');

});

module.exports = router;
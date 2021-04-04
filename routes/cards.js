const express = require('express');
const router  = express.Router();

const {data} = require('../data/appData.json');
const {cards} = data;

router.get('/', (req,res)=>{
    const randomCardID = Math.floor(Math.random() * cards.length);
    res.redirect(`/cards/${randomCardID}?side=question`);
})

router.get('/:id', (req,res)=>{
    const name = req.cookies.username;
    const {id} = req.params;
    const {side} = req.query;
    const {hint} = cards[id];

    if(!side){ return res.redirect(`/cards/${id}?side=question`)}

    const text = cards[id][side] // /cards/1?side=question
    const templateData = {text, id, name};
    
    if(side ==='question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
        templateData.side = 'QUESTION';
    } else if(side==='answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
        templateData.side ='ANSWER';
    }
    res.render('cards', templateData);
});


module.exports = router;
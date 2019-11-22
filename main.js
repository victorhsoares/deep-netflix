function search(){
    if (document.querySelector('input').style.display == 'flex'){
        document.querySelector('input').style.display = 'none';
        document.querySelector('.info__down').style.border = 'none'
        
     }
    
     else{
        document.querySelector('input').style.display = 'flex';
        document.querySelector('.info__down').style.border = 'solid 2px white';
     }
    
    }
function rightboxone(){
        document.querySelector('.box__serie').style.display = 'none'
        document.querySelector('.box__serie--slide').style.display = 'flex'
     }
     
function leftboxone(){
        document.querySelector('.box__serie--slide').style.display = 'none'
        document.querySelector('.box__serie').style.display = 'flex'
     }

function rightboxtwo(){
        document.querySelector('.box__movie').style.display = 'none'
        document.querySelector('.box__movie--slide').style.display = 'flex'
     }
     
function leftboxtwo(){
        document.querySelector('.box__movie--slide').style.display = 'none'
        document.querySelector('.box__movie').style.display = 'flex'
     }

function rightboxthree(){
        document.querySelector('.box__infantil').style.display = 'none'
        document.querySelector('.box__infantil--slide').style.display = 'flex'
     }
     
function leftboxthree(){
        document.querySelector('.box__infantil--slide').style.display = 'none'
        document.querySelector('.box__infantil').style.display = 'flex'
     }     



     
     
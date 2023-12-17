let stinput=document.querySelector(`.stinput`)
let drawborder=document.querySelector(`.draw-border`)
let error=document.querySelector(`.error`)
let cmd=document.querySelector(`.cmd`)
let ndinput=document.querySelector(`.ndinput`)
let drawborder1=document.querySelector(`.draw-border1`)
let card1=document.querySelector(`.card1`)
let card2=document.querySelector(`.card2`)
let card3=document.querySelector(`.card3`)

let span2=document.querySelector(`.span2`)
let h1=document.querySelector(`.h1`)
let rdinput=document.querySelector(`.rdinput`)
let drawborder2=document.querySelector(`.draw-border2`)
let count=5;
 let chance=document.querySelector ('.chance')

drawborder.addEventListener(`click`,function(){
  if(stinput.value== ''){
   error.style.display='block'
  }else{

   card1.style.display='none'; 
     card2.style.display='block';
     card2.style.marginLeft='122%'
  }
})

drawborder1.addEventListener('click',function(){
    if(ndinput.value < 1 || ndinput.value > 10){
        cmd.style.display='block';
        
    }else{
  if((ndinput.value - 15)){
    card3.style.display='block';
    card2.style.display='none';
   
  }else{
   

    cmd.style.display='block';

 

  }
    }
})

drawborder2.addEventListener('click',function(){
  
 if(ndinput.value == rdinput.value){
  span2.style.display ='block';

 }else{
  count--;
chance.innerHTML=count;

if(count == 0){
 console.log("mile nai");

 h1.style.display ='block'
}  
 }
})
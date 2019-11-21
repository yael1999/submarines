var userScore=0;
var compScore=0;
const userScoreSpan=document.getElementById("user-score");
const compScoreSpan=document.getElementById("computer-score");
const begin=document.getElementById("beginButton");
const button=document.getElementById(this.id);
var elements = document.getElementsByClassName('button'); // get all elements



function game(){
for(i=0;i<25;i++){
if(compScore<10 && userScore==26){
begin.innerHTML="you won!!!";
 break;}
if(compScore==10 &&userScore<26){
begin.innerHTML="you exploaded!!!";
break;}

/*else if user clicks a markes button,the explosion shows,compScore increases,result says:try again!else,applause
shows,userScore increases,result shows nice guess!*/
}}






function getRandomArray(nums){
for(i=0;i<=9;i++){
    var num=Math.floor(Math.random() * (36) )+1;
    if(num.exists(nums)){
        i--;
        continue;
    }
    else{
         nums.push(num);
    }
}
/* every place that was chosen is imediately marked with hidden explosions(10 places),
and if not chosen put hidden applause .go to game*/

}

function exists(num,array){
    for(var i=0;i<array.length;i++){
        if(array[i]==num){
              return true;
           }}
        return false;
}



function main(){
   /*$("#"+this.id).css('background-color','red');}*/
/*document.querySelector("button").addEventListener("click",function(){
document.querySelector("body").styleSub.background=red;/*
})*/
var landmines=[10];
getRandomArray(landmines);
console.log(landmines);
id=parseInt(this.id);
  if((exists(id,landmines))){
  $(".button").on("click",funtion())
      $("#"+this.id).css('background-color','red');
    }
}
main();
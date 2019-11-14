var userScore=0;
var compScore=0;
const userScoreSpan=document.getElementById("user-score");
const compScoreSpan=document.getElementById("computer-score");
const result=document.getElementById("beginButton");
const buttons=document.querySelector(".chart");
const 1=document.getElementById("1");
const 2=document.getElementById("2");
const 3=document.getElementById("3");

function game(){
for(i=0;i<25;i++){
if(compScore<10 && userScore=26){
break;
/*result says you won !!!*/ }
if(compScore=10 &&userScore<26){
break;
/*result says you comletely exploaded !!!*/}
else
/*if user clicks a markes button,the explosion shows,compScore increases,result says:try again!else,applause
shows,userScore increases,result shows nice guess!*/
}
}





function getRandomArray(nums){
for(i=0;i<=9<i++){
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
$(".button").on("click",funtion(){
    id=parseInt(this.id);
    if((exists(id,nums))){
        $("#"+id).css('background-color','red')
    }

})

function exists(num,array){
    for(var i=0;i<array.length;i++){
        if(array[i]==num){
              return true;
           }}
        return false;
}


windows.onload=main()
function main(){
    nums=[]
}
var board=[];
var nums=[1,2,3,4,5,6,7,8,9,10];
getRandomArray(nums);
alert(nums);


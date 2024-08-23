if(confirm("want to see rules")){
  confirm("Initial Sequence: The game starts by lighting up and sounding one of the four colored buttons. This is the initial sequence Repeat the Sequence: After the sequence is shown, you must press the buttons in the exact same order as they lit up.Continue: If you successfully replicate the sequence, the game will add one more step to the sequence, and you must repeat the new, longer sequence.Failure: If you make a mistake, the game usually provides a feedback sound and/or light to indicate the error. Depending on the game version, it might either end the game or offer a chance to start over.");
}
var colours=["green","red","yellow","blue"];
var values=[];
var movesofplayer=[];
var n=0;
var  level=0;
//console.log(n);
var keypress=false;
$(document).keypress(function()
{
  if(keypress==false)
  {
   normal();
   keypress=true;
  }
  else
  {
    alert("keypad keys restricted chekc the last key pressed it is highlated");
  }
}
);
$(".btn").click(function()
{
    var c=this.innerHTML;
    movesofplayer.push(c);
    //console.log(movesofplayer.length);
    //console.log(values);
    ButtonAnimation(c);
    makesound(c);
    funclick(movesofplayer.length-1);
});
function funclick(currentkey)
{
    if (values[currentkey] === movesofplayer[currentkey]) 
        {

          if (movesofplayer.length === values.length)
          {
            setTimeout(function (){normal(); }, 1000);
          }
        }
        else
        {
          bganimation();
          var newaud=new Audio("sounds/"+"wrong"+".mp3");
          newaud.play();
          $("#level-title").text("game over start again");
          setTimeout(function (){
            alert('you lost start again');
          }, 1000);
          setTimeout(function (){
            window.location.reload();
          }, 1000);
          //alert('you lost reload');
        }
};
function normal()
{
   level++;
   $("#level-title").text("level"+level);
   movesofplayer=[];
   n=Math.floor(Math.random()*4);
   values.push(colours[n]);
   ButtonAnimation(colours[n]);
   makesound(colours[n]);
}
function  makesound(assam)
 {
        var audio1=new Audio("sounds/"+assam+".mp3");
        audio1.play();
    };
function ButtonAnimation(currentkey)
{
    $("." + currentkey).addClass("pressed");
  setTimeout(function () {
    $("." + currentkey).removeClass("pressed");
  }, 100);
    //location.reload();
}
function bganimation()
{
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
}
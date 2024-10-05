let score = 0;
var output;
var startButton;
var timeStart;
var xStart = 100;
var yStart = 150;
var xOffSet = 200;
var yOffSet = 200;
var myTimeOut;
var gameTimer = 20000;
var timeoutUpdateTimerTextFreq = 100;
var timeoutUpdateTimerText;


const xCoordinates = [xStart, xStart + xOffSet  , xStart + xOffSet * 2];
const yCoordinates = [yStart, yStart + yOffSet  , yStart + yOffSet * 2];
const radius = 80;

var scoreText = new createjs.Text("your score was: ", "30px Arial", "#000000");
var timerText = new createjs.Text("timer: " , "50px Arial");
var canvas = new createjs.Stage("myCanvas");
output = new createjs.Text("score: 0", "50px Arial", "#0000ff");
var retry = new createjs.Text("Retry?", "50px Arial", "#000000");
var startImage = new createjs.Bitmap("img/startbutton.jpg");
timerText.x = 400;
timerText.y = 10;
retry.x = 235;
retry.y = 150;
output.x = 30;
output.y = 10;
startImage.x = 100;
startImage.y = 150;
scoreText.x = 175;
scoreText.y = 100;
startImage.image.onload = function(){
    canvas.update();
}

canvas.addChild(output);
canvas.addChild(startImage);
canvas.update();



startImage.on("click", function(evt)
    {
        score = 0; 
        output.text = "score: " + score;
        startImage.visible = false;
        retry.visible = false;
        scoreText.visible = false;
        timerText.visible = true;
        output.visible = true;
        canvas.addChild(timerText);
        timeStart = Date.now();
        timerText.text = "Timer: 0.0 ";
        canvas.update();
        timeoutUpdateTimerText = window.setTimeout(updateTimerText, timeoutUpdateTimerTextFreq);
        myTimeOut = window.setTimeout(TimeOut, gameTimer);
        newLevel();
        
    
    })

function newLevel(){
        const xPos = Math.floor(Math.random() * 3);
        const yPos = Math.floor(Math.random() * 3);
       
         
        setupBoard(xPos, yPos);
        
}    


function GameOver(){
    window.clearTimeout(timeoutUpdateTimerText);
    canvas.removeAllChildren();
    retry.visible = true;
    startImage.visible = true;
    scoreText.visible = true;
    output.visible = false;
    scoreText.text = "your score was: " + score;
    canvas.addChild(scoreText);
    canvas.addChild(startImage);
    canvas.addChild(output);
    canvas.addChild(retry);
    canvas.update();
    
    
    

}
function ClickedBlueCircle(){
    window.clearTimeout(myTimeOut);
    scoreText.text = "your score was: " + score;
    GameOver();
}
function TimeOut(){
    
    GameOver();

}

function updateTimerText(){
    var t = Date.now() - timeStart;
    t = gameTimer - t;
    t = Math.floor(t / 100) / 10;
    timerText.text = "Timer: " + t;   
    canvas.update();
    timeoutUpdateTimerText = window.setTimeout(updateTimerText, timeoutUpdateTimerTextFreq);
}




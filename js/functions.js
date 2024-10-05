function circleClick(evt)
{
    if (evt.target.name == "red")
        {
            var timeClicked = Date.now();
            var timePassed = timeClicked - timeStart;
            score += 1
            //score += Math.floor(points(timePassed / 1000)); 
            output.text = "score: " + score;  
            canvas.update();
           
           newLevel();
        }
        else{
            ClickedBlueCircle();
            //score -= score; 
            //output.text = "score: " + score;
            //canvas.update();
        }
}
function points(t){
    var p = 100 - 90 * t
    if (p <= 10){
        p = 10;

    }
    return p;
}


function circleColor(targetX,targetY,circleX,circleY)
{
    if (targetX == circleX && targetY == circleY) { 
        var color = "red";
    } else {
        var color = "blue";
    }
    return color;
}


function setupBoard(targetX, targetY) {
    
   
    
    var circle1 = new createjs.Shape();
    circle1.name= circleColor(targetX,targetY,0,0);
    circle1.graphics.beginFill(circleColor(targetX,targetY,0,0)).drawCircle(0, 0, radius);
    circle1.x = xCoordinates[0];
    circle1.y= yCoordinates[0];
    circle1.on("click", function(evt)
    {
        circleClick(evt);
    })
    canvas.addChild(circle1);
       
   

    var circle2 = new createjs.Shape();
    circle2.name=circleColor(targetX,targetY,0,1);
    circle2.graphics.beginFill(circleColor(targetX,targetY,0,1)).drawCircle(0, 0, radius);
    circle2.x = xCoordinates[0];
    circle2.y= yCoordinates[1];
    circle2.on("click", function(evt)
{
    circleClick(evt);
     
})
canvas.addChild(circle2);



var circle3 = new createjs.Shape();
circle3.name=circleColor(targetX,targetY,0,2);
circle3.graphics.beginFill(circleColor(targetX,targetY,0,2)).drawCircle(0, 0, radius);
circle3.x = xCoordinates[0];
circle3.y= yCoordinates[2];
circle3.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle3);


        
var circle4 = new createjs.Shape();
circle4.name=circleColor(targetX,targetY,1,0);
circle4.graphics.beginFill(circleColor(targetX,targetY,1,0)).drawCircle(0, 0, radius);
circle4.x = xCoordinates[1];
circle4.y= yCoordinates[0];
circle4.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle4);


           
var circle5 = new createjs.Shape();
circle5.graphics.beginFill(circleColor(targetX,targetY,1,1)).drawCircle(0, 0, radius);
circle5.name=circleColor(targetX,targetY,1,1);
circle5.x = xCoordinates[1];
circle5.y= yCoordinates[1];
circle5.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle5);


           
var circle6 = new createjs.Shape();
circle6.graphics.beginFill(circleColor(targetX,targetY,1,2)).drawCircle(0, 0, radius);
circle6.name=circleColor(targetX,targetY,1,2);
circle6.x = xCoordinates[1];
circle6.y= yCoordinates[2];
circle6.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle6);


           
var circle7 = new createjs.Shape();
circle7.graphics.beginFill(circleColor(targetX,targetY,2,0)).drawCircle(0, 0, radius);
circle7.name=circleColor(targetX,targetY,2,0);
circle7.x = xCoordinates[2];
circle7.y= yCoordinates[0];
circle7.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle7);


        
var circle8 = new createjs.Shape();
circle8.graphics.beginFill(circleColor(targetX,targetY,2,1)).drawCircle(0, 0, radius);
circle8.name=circleColor(targetX,targetY,2,1);
circle8.x = xCoordinates[2];
circle8.y= yCoordinates[1];
circle8.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle8);



var circle9 = new createjs.Shape();
circle9.graphics.beginFill(circleColor(targetX,targetY,2,2)).drawCircle(0, 0, radius);
circle9.name=circleColor(targetX,targetY,2,2);
circle9.x = xCoordinates[2];
circle9.y= yCoordinates[2];
circle9.on("click", function(evt)
{
    circleClick(evt);
})
canvas.addChild(circle9);
canvas.update(); 

}


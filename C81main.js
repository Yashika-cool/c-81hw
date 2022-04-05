canvas= document.getElementById("myCanvas");
color="teal";
ctx=canvas.getContext("2d");
//Begins a path, or resets the current path for drawing anything. It tells the canvas to start drawing the shape or object.
ctx.beginPath();
//Sets the color for the drawing object. We have set this to the color variable
ctx.strokeStyle=color;
//Sets width for the drawing
ctx.lineWidth=2;
//Used to create an arc or curve which is used to create circles or parts of circles.
//Math.PI is 180 degree,so 2*Math.PI=360 degree
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40 ,0 , 2 * Math.PI);
ctx.stroke();


function my_mousedown(e)
{
    
    //capture x and y coordinates of mouse and store in on variable mouse_x and mouse_y
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}
//function to draw a circle

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}
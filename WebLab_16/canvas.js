function mouse()
{
		var x = document.getElementById("canvas");
		canvas = x.getContext("2d");
		var pic = new Image();
		pic.src = "pic.src = "http://sheltongrp.com/wp-content/uploads/2013/09/Mushrooms.jpg";";
		
		window.addEventListener("mousemove",icon,false);
}

function icon(e) 
{
	canvas.clearRect(0,0,700,700);
	var xPos = e.clientX;
	var yPos = e.clientY;
	canvas.fillRect(xPos-50,yPos-50,100,100);
}
window.addEventListener("load",mouse,false);
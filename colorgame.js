var numofsquares =6;

var colors=generaterandomcolors(numofsquares);

var pickedcolor=pickcolor();
console.log(pickedcolor)
var colorDisp = document.getElementById("colorDisp");
colorDisp.textContent=pickedcolor;
var messageDisp=document.querySelector("#message");
var h1=document.querySelector("h1");
var squares =document.querySelectorAll(".square");
var reset =document.querySelector("#reset");
var easybtn =document.querySelector("#easy");
var hardbtn =document.querySelector("#hard");
/*var modebtn = document.querySelectorAll(".mode");*/

for(var i=0;i<colors.length;i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){

		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor=== pickedcolor)
			{
		messageDisp.textContent = "correct!";
		changecolors(clickedcolor);
		h1.style.backgroundColor= clickedcolor;
		reset.textContent="PLay Again?";



	}
		else{this.style.backgroundColor= "blue";
		messageDisp.textContent = "Try Again";}
	});
}

function changecolors(color)
{
	for(var i=0;i<colors.length;i++)
{
	squares[i].style.background = color;
}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);

return colors[random];
}
function generaterandomcolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolors());
	}
	return arr;



}
function randomcolors()
{
	var r =Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g +", " + b + ")";
}

reset.addEventListener("click",function(){

	colors =generaterandomcolors(numofsquares);
	pickedcolor =pickcolor();
	console.log(pickedcolor);
	colorDisp.textContent=pickedcolor;

	for(var i=0;i<colors.length;i++)
	{
		
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDisp.textContent ="";
	this.textContent="New Colors";
})


easybtn.addEventListener("click",function(){

hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numofsquares=3;

	colors= generaterandomcolors(numofsquares);
	pickedcolor=pickcolor();
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	}


	
	colors =generaterandomcolors(numofsquares);
	pickedcolor =pickcolor();
	colorDisp.textContent=pickedcolor;
	for(var i=0;i<colors.length;i++)
	{
		
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDisp.textContent ="";
	this.textContent
})


hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numofsquares=6;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display= "block";
	}

	colors =generaterandomcolors(numofsquares);
	pickedcolor =pickcolor();
	colorDisp.textContent=pickedcolor;
	for(var i=0;i<colors.length;i++)
	{
		
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDisp.textContent ="";
	this.textContent
})    


/*

  for(var i=0; i< modebtn.length; i++)
{
modebtn[i].addEventListener("click",function(){
modebtn[0].classList.remove("selected");
modebtn[1].classList.remove("selected");
this.classList.add("selected");
(this.textContent === "Easy")?(numofsquares=3):(numofsquares=6);
reset();



});

}
function reset()
{

	colors =generaterandomcolors(numofsquares);
	pickedcolor =pickcolor();
	colorDisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";

			squares[i].style.background = colors[i];
		}
	else{
		squares[i].style.display="none";
}
	}
	h1.style.backgroundColor ="steelblue";
	reset.textContent="New Colors";
} */




























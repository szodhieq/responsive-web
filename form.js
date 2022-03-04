var button= document.getElementById("enter");
var input= document.getElementById("userinput");
var ul= document.querySelector("ul");
button.addEventListener("click",function(){console.log(input.value);
                                           var li=document.createElement("li");
                                           li.appendChild(document.createTextNode(input.value));
                                           ul.appendChild(li);})

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
	body.style.background="linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
}

color1.addEventListener("input", setGradient);
	
	color2.addEventListener("input", setGradient);
	

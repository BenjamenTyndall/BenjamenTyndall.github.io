// variables
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var button2 = document.getElementById("enterListName");
var input2 = document.getElementById("listName")
var h1 = document.querySelector("h1")

//functions
function  inputLength(){
	return input.value.length;
}

function titleChanger(){
	var NewN = document.querySelector("h1").textContent = input2.value;

}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

		var button = document.createElement("button");
		button.appendChild(document.createTextNode("Complete"));
		li.appendChild(button);
		button.onclick = DONE;
}

function addAfterEnter(evemt){
	if (inputLength() > 0 && evemt.keyCode === 13){
		createListElement();
	}
}


function addAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}





function DONE(evt){
	evt.target.parentNode.remove();
}



//main code
button.addEventListener("click", addAfterClick)
input.addEventListener("keypress", addAfterEnter)
button2.addEventListener("click", titleChanger)


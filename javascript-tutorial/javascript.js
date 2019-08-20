var newItemCounter = 1;
var list2 = document.getElementById('list1');
var button1 = document.getElementById('button1');
var headline1 = document.getElementById('headline1');
var listItems = document.getElementById('list1').getElementsByTagName("li");

for(i = 0; i < listItems.length; i++) {
	//listItems[i].innerHTML = "Hello world.";//
	listItems[i].addEventListener("click", activateItem);
}
function activateItem() {
	//alert("Click detected");//
	headline1.innerHTML = this.innerHTML;
	this.classList.add("active");
}

button1.addEventListener("click", createNewItem);

function createNewItem() {
	list2.innerHTML += "<li>Something new " + newItemCounter + "</li>";
	newItemCounter++;

}
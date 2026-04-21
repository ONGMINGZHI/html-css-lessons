let element = document.getElementById("my-element");

// can style like css too
element.style.backgroundColor = "blue";
element.classList.add("my-class");

// create elements

let paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph from JS";

document.body.appendChild(paragraph);

let catImage = document.createElement("img");
catImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74p0-GFNquBzzGLN9SazH22Wrus46aPPqYQ&s";
catImage.width = "100";
document.body.appendChild(catImage);

let myDiv = document.getElementsByClassName("my-class");
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph with class my-class";
console.log(myDiv);
myDiv[0].appendChild(newPara);

let paragraphs = document.getElementsByTagName("div");
console.log(paragraphs[0].innerHTML);
paragraphs[1].innerHTML = `<h1>This will replace the existing paragraph,without removing the p tag<h1>`;

// Both do the same thing,but one is more direct
// flowerImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dOr-k9OqHbwlD4IwuVPrF4GvYAbre4ab9xkpv0F5Aqe-c3T0AbtmK38&s"
catImage.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dOr-k9OqHbwlD4IwuVPrF4GvYAbre4ab9xkpv0F5Aqe-c3T0AbtmK38&s")
// change image

myDiv[0].removeChild(newPara)
// This will remove the new paragraph
// In the blue background text
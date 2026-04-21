// Select all the buttons
let buttons = document.querySelectorAll(".myButton");
// Use a for loop to add a listener to all the buttons
// for(let i=0;i<buttons.length;i++){
//     buttons[i].onclick=function(){
//         alert(`Button${i+1}has been clicked!`)
//     }
// }

// Can you do the same with a .forEach loop?

buttons.forEach(function (button, index) {
    // button.onclick = function () {
    //     alert(`Button ${index} has been clicked!`);
    // };
    button.addEventListener("click", function () {
        alert(`Button ${index} was clicked!`);
    });
    // button.removeEventListener("click")
});

buttons.forEach(function (button) {
    // button.onmouseover = function () {
    //     button.style.backgroundColor = "green";
    // };
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "darkblue";
    });
});

const myInput = document.getElementById("myInput");
// myInput.onchange=function(){
//     alert("Input value changed!")
// }
myInput.addEventListener("change", function (event) {
    const inputValue=event.target.value
    alert(`The input value is ${inputValue}`);//using change
});

// getElementById method            vs       addEventListener method 
//have on... (onclick)       |            does not have on.... 
//use =function     |           does not have =function 

myInput.onkeydown=function(event){
    console.log(event.key)
}//show and save all the things that is typed.

let myWindow=window
myWindow.onscroll=function(){
    console.log("Window scrolled")
}

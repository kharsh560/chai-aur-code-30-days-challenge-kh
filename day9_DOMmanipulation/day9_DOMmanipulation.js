// Task-1
const userName = "Sarah";
console.log(userName);
document.getElementById("greetHello").innerText = "hello " + userName;

// Task-2
// document.getElementsByClassName("greetMorning") -> Gives an HTMLCollection!
console.log(document.getElementsByClassName("greetMorning")[0]);
// It logs this:-
/*
<div class="greetMorning">
  <h1>Good Morning</h1>
</div>;
*/
document.getElementsByClassName("greetMorning")[0].style.backgroundColor =
  "red";
// NOTE: After the dot "." while writing this "style.backgroundColor", the intellisense didn't give suggestions.

// Task-3
const newDiv = document.createElement("div");
newDiv.textContent = "Hola!";
newDiv.classList.add("newDivClass");
newDiv.style.backgroundColor = "blue";
newDiv.style.padding = "10px";
newDiv.style.fontSize = "30px";
document.body.appendChild(newDiv);

// Task-4
const newLi = document.createElement("li");
newLi.textContent = "Beautiful";
document.getElementById("synonymsOfHandsome").appendChild(newLi);

// Task-5
document.getElementsByClassName("greetMorning")[0].remove();

// Task-6 -> Removing any element's last child.
const parentDiv = document.getElementById("synonymsOfHandsome");
// Need to know the number of children in this parentDiv element:-
console.log(parentDiv.childElementCount);
console.log(parentDiv.children[parentDiv.childElementCount - 1]);
parentDiv.children[parentDiv.childElementCount - 1].remove();

// Task-7
const imgElement = document.getElementById("Horror_Img").attributes;
console.log(imgElement);
console.log(imgElement[1]);
// imgElement[1] = "day9_DOMmanipulation/zombiesWalkingPic.jpg"; => Didn't work!!
console.log(imgElement[1].value);
imgElement[1].value = "./zombiesWalkingPic.jpg";

// By Me
const buttonToChangeImg = document.getElementById("clickToChangeImg");
buttonToChangeImg.addEventListener("click", () => {
  if (imgElement[1].value === "./zombiesWalkingPic.jpg") {
    imgElement[1].value = "./controlsBgImg.jpg";
  } else {
    imgElement[1].value = "./zombiesWalkingPic.jpg";
  }
});
// Logic:- if its "zombiesWalkingPic" then make it "controlsBgImg"
// But if its "controlsBgImg" only, then, make it "zombiesWalkingPic"

// Task-8 & Task-9
// Toggling a class in JavaScript means adding a class to an element if it doesn't exist,
// or removing it if it already exists. This is typically done using the classList.toggle() method.
document.getElementById("borderToggleBtn").addEventListener("click", () => {
  document
    .getElementById("divForBorderToggle")
    .classList.toggle("stylingOfTodoList");
});

// Task-10
document
  .getElementsByClassName("imgAndButton")[0]
  .addEventListener("mouseover", () => {
    document.getElementsByClassName("imgAndButton")[0].style.borderColor =
      "blue";
  });
// console.log(document.getElementsByClassName("imgAndButton")[0]);
// document.getElementsByClassName("imgAndButton")[0].style.border

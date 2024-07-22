// Task-1
document.getElementById("goodMorningBtn").addEventListener("click", () => {
  document.getElementById("goodMorning").textContent = "Namaste";
});

// Task-2
document
  .getElementById("divForBorderToggle")
  .addEventListener("dblclick", () => {
    document
      .getElementById("todoListImage")
      .classList.toggle("visibilityClass");
    //   NOTE: When I double click this element, then it does gets hidden, But, upon once more double clicking it, it does not come back again.
    // Fixing it:-
    // Actually I was adding the event to the "image" element only. So when It got disappear, there's no element only to get double clicked! Hence the issue!
  });

// Task-3 & Task-4
const gdMorningElement = document.getElementById("goodMorning");
gdMorningElement.addEventListener("mouseover", () => {
  gdMorningElement.style.backgroundColor = "red";
});
gdMorningElement.addEventListener("mouseout", () => {
  gdMorningElement.style.backgroundColor = "";
});

// Task-5
document.getElementById("inputBox").addEventListener("keypress", (e) => {
  console.log(e.key); // Logs individual key press.
  console.log(e.target.value); // Logs the value inside the targetted element "after" the key press!
});

// Task-6
document.getElementById("inputBoxSecond").addEventListener("keyup", (e) => {
  console.log(e.target.value);
  // Using "keyup" gives us what we wanted!!
  // See, when I pressed the key DOWN, the value got registered in the inputBox.
  // But the event of logging that value triggered after the ley was release UP!
});

// Task-7
document.getElementById("formElement").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.children[0].value);
});
// NOTE: In form; console.log(e.target) returns the entire "form" element as a whole.
// So in order to get its 1st child, we needed to use ".children[0]"

// Task-8

document.getElementById("mySelect").addEventListener("change", function () {
  // Get the selected value
  const selectedValue = this.value;
  // Display the selected value in the paragraph
  document.getElementById(
    "selectedValue"
  ).textContent = `Selected value: ${selectedValue}`;
});

// Task-9
// Event delegation is a technique in JavaScript that involves using a single event listener
// on a parent element to handle events for multiple child elements. This approach is often
// used to manage events more efficiently and reduce the number of event listeners attached to individual elements.
document.getElementById("myList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // Why "LI" and not "li" ???
    // In JavaScript event handling, e.target.tagName returns the tag name of the element that triggered the event
    // in uppercase. This is because the tagName property of an element always provides the tag name in uppercase,
    // regardless of how the tag is written in the HTML.

    console.log(e.target.textContent);
  }
});

// Task-10 -> Dynamically add a new "li" upon clicking the "add new" button!
// Function to handle click events
function handleItemClick(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
}
// Attach event listener to the parent element
document
  .getElementById("parentList")
  .addEventListener("click", handleItemClick);

// Function to dynamically add new items
document.getElementById("addItem").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent =
    "New Item " + (document.querySelectorAll("#parentList li").length + 1);
  document.getElementById("parentList").appendChild(newItem);
});

// NOTE: About "querySelectorAll('#parentList li')"
// "#parentList li" is a CSS selector used to target <li> elements that are descendants of an element with the ID parentList.
// #parentList: This targets the element with the ID parentList. In this case, it’s an <ul> element.
// li: This targets all <li> elements that are inside the #parentList element.

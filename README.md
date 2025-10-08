1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
Use getElementById() for a single unique element.
Use querySelector() for flexibility with CSS selectors.
Use querySelectorAll() when you need multiple elements.
Avoid getElementsByClassName() unless you specifically need a live collection.




2.How do you create and insert a new element into the DOM?

Answer:

const div = document.createElement('div');

div.textContent = "Hello, I’m Taju";

div.classList.add('greeting');

document.body.appendChild(div);





3.What is Event Bubbling and how does it work?

Answer:

<div id="parent">
  <button id="child">Click</button>
</div>

document.getElementById("parent").addEventListener("click",function (){
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", function (){
  console.log("Child clicked");
});






4.What is Event Delegation in JavaScript? Why is it useful?

Answer:

<ul id="container">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
document.getElementById("container").addEventListener("click",function (e){
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});





5.What is the difference between preventDefault() and stopPropagation() methods?

 Answer:

preventDefault():Stops the default action of an element
stopPropagation():Stops the event from bubbling up





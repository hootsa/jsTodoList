// nodes = html elements

// Selectors or getters

// document.getElementById('idName')        -> HTML NODE Object
// document.getElementsByClassName("btn")   ->  Array of [HTML NODES object, HTML NODES object]

// Create HTML NODE
// document.createElement('tagName')

// create simple Text NODE
// document.createTextNode('click on me')

// HTML NODE Functions

// how to write html inside nodes but it will overwrite other things on that element
// htmlElementObj.innerHTML="soroush"
// htmlElementObj.innerHTML="<h1>sorosh</h1>"

//How to add/remove class to element
// htmlElementObj.classList.add('classname')
// htmlElementObj.classList.remove('classname')

// how to add HTML element under another HTML element
// htmlElementObj.appendChild(anotherHtmlElementObj);
//htmlElementObj.prepend(anotherHtmlElementObj);

// How to listen to an event
// htmlElementObj.addEventListener("click", functionName);
// htmlElementObj.addEventListener("input", functionName);  // listen to user type something on input field

// How to get Input Value
// htmlElementObj.value

// for assign value to input
// htmlElementObj.value = 'new value'

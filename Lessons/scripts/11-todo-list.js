/*1. create array to store todos
  2. When we click "Add".
  3. Get text from textbox
  4. Add it to the array
  5. console.log() the array */

const todoList = [];                                                 // Step 1

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");   // Step 3
    const name = inputElement.value;                                 // Step 3
    todoList.push(name);                                             // Step 4
    console.log(todoList);                                           // Step 5

    inputElement.value = '';         // text in text box becomes Empty after clicking Add
}

/*
    1. Create array to store todos
    2. When we click "Add".
    3. Get text from textbox
    4. Add it to the array
    5. console.log() the array
 */

const todoList = []; // Step 1

/*
                                Steps to display on page:
    1. Loop through array
    2. Create HTML code for each todo
    3. Put HTML on the web page
*/

function renderTodoList() {
    let todoListHTML = "";

    for (let i = 0; i < todoList.length; i++) { // 1.
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;  // 2.
        todoListHTML += html; 
    }
    //GENERATING THE HTML
    console.log(todoListHTML);

    document.querySelector(".js-todo-list").innerHTML = todoListHTML; // 3.
}

function addTodo() {
    const inputElement = document.querySelector(".js-name-input"); // Step 3
    const name = inputElement.value; // Step 3
    todoList.push(name); // Step 4
    console.log(todoList); // Step 5

    inputElement.value = ""; // text in text box becomes Empty after clicking Add

    renderTodoList();
}

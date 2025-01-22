// Load todoList from localStorage if it exists
// To RESET todoList items to original items. In the console you type:
// localStorage.removeItem('todoList')
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: 'December 22, 2022'
}, {
    name: 'wash dishes',
    dueDate: 'December 22, 2022'
}];

// Render the todo list on page load
renderTodoList();

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function resetTasks() {
    todoList = [{
        name: 'make dinner',
        dueDate: 'December 22, 2022'
    }, {
        name: 'wash dishes',
        dueDate: 'December 22, 2022'
    }];
    saveToStorage(); // Save the reset list to localStorage
    renderTodoList(); // Re-render the todo list
}

document.querySelector('.reset-tasks').addEventListener('click', resetTasks);

// Regular Functions enable Hoisting
function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                saveToStorage();
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    saveToStorage();
    inputElement.value = '';

    renderTodoList();
}


// Closure:
// - If a function has access to a value
// - It will always have access to that value
// - values gets packaged together (enclosed) with the function

// Cougar CS Meeting        01/23/2025
// COSC 3320 Homework 1     01/26/2025
// Code[Coogs]              01/27/2025
// COSC 3340 Assignment 1   01/31/2025
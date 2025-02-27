// Load todoList from localStorage if it exists
// To RESET todoList items to original items. In the console you type:
// localStorage.removeItem('todoList')
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: 'December 22, 2022',
    time: '2:15'
}, {
    name: 'wash dishes',
    dueDate: 'December 22, 2022',
    time: '2:15'
}];

// Render the todo list on page load
renderTodoList();

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function resetTasks() {
    todoList = [{
        name: 'make dinner',
        dueDate: 'December 22, 2022',
        time: '2:15 PM'
    }, {
        name: 'wash dishes',
        dueDate: 'December 22, 2022',
        time: '2:15 PM'
    }];
    saveToStorage(); // Save the reset list to localStorage
    renderTodoList(); // Re-render the todo list
}

document.querySelector('.reset-tasks').addEventListener('click', resetTasks);

// Regular Functions enable Hoisting
function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate, time } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>${time}</div>
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

    const timeElement = document.querySelector('.js-time-input');
    const time = timeElement.value;

    todoList.push({
        name,
        dueDate,
        time
    });

    saveToStorage();
    inputElement.value = '';

    renderTodoList();
}


// Closure:
// - If a function has access to a value
// - It will always have access to that value
// - values gets packaged together (enclosed) with the function
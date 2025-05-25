const todoList = [{
    abb: 'PRO',
    dueDate: 'Projects'
}, {
    abb: 'DAT',
    dueDate: 'Data Science'
}];

renderTodoList();

// Regular Functions enable Hoisting
function renderTodoList(){
    let todoListHTML = '';
    todoList.forEach((todoObject, index) =>{
        const {abb, dueDate} = todoObject;
        const html = `
        <div  class="focus-hour-number"><p>0 hr.</p></div>
        <div class="right-alignment">${abb}</div>
        <div>= ${dueDate}</div>
            <button class = "delete-todo-button js-delete-todo-button">Delete</button>
        `;  // Generating an HTML
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    // querySeletorALL: will give us ALL the elments with '.js-delete-todo-button'
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const abb = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-focus-hour-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        abb,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}

// Closure:
// - If a function has access to a value
// - It will always have access to that value
// - values gets packaged together (enclosed) with the function
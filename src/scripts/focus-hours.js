let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    abb: 'PRO',
    focusName: 'Projects'
}, {
    abb: 'DAT',
    focusName: 'Data Science'
}];

renderTodoList();

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Regular Functions enable Hoisting
function renderTodoList(){
    let todoListHTML = '';
    todoList.forEach((todoObject, index) =>{
        const {abb, focusName} = todoObject;
        const html = `
        <div  class="focus-hour-number"><p>0 hr.</p></div>
        <div class="right-alignment">${abb}</div>
        <div>=  ${focusName}</div>
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
                saveToStorage();
                renderTodoList();
            });
    });
}

document.querySelector('.js-edit-button').addEventListener('click', () => {
  document.querySelector('.focus-hour-section').classList.add('is-editing');
});

document.querySelector('.js-save-button').addEventListener('click', () => {
  document.querySelector('.focus-hour-section').classList.remove('is-editing');
});

document.querySelector('.js-save-button').addEventListener('click', () => {
  document.querySelector('.focus-hour-top-section').classList.remove('is-editing');
});

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-abb-input');
  const abb = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-focus-hour-input');
  const focusName = dateInputElement.value.trim();

  if (abb.length < 1 || abb.length > 3) {
    alert("Abbreviation must be between 1 and 3 characters.");
    return;
  }

  if (focusName.length < 1) {
    alert("Focus Hour Name must have at least 1 characters.");
    return;
  }

  todoList.push({
    abb,
    focusName
  });

  saveToStorage();
  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

// Lines 86 - 94 are Backend Practice
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/get-word')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched from backend in focus-hours.js:', data.word);
    })
    .catch(err => console.error('Error fetching word:', err));
});
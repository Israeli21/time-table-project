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

  

//   function renderSubjectHours() {
//     let hoursNumbersHTML = ``;
//     subjectsInfo.forEach(({ classNaim, abbreviation, name }) => {
//       const html = `
//         <div class="right-align"><p class="${classNaim}">0 hr</p></div>
//         <div><p>${abbreviation}<p></div>
//         <div><p>= ${name}</p></div>
//       `;
//       hoursNumbersHTML += html;
//     });
  
//     hoursNumbersHTML += `
//       <button onclick="addToSubjects()">Add</button>
//       <input class="subject-abbreviation-input" placeholder="Abbreviation">
//       <input class="subject-name-input" placeholder="Subject Name">
//     `;
  
//     document.querySelector('.subjects-information').innerHTML = hoursNumbersHTML;
  
//   }  
  
//   function saveToStorage() {
//     localStorage.setItem('subjectsInfo', JSON.stringify(subjectsInfo));
//   }
  
//   function addToSubjects() {
//     const inputElement = document.querySelector('.subject-abbreviation-input');
//     const subjectAb = inputElement.value.trim();
  
//     const inputName = document.querySelector('.subject-name-input');
//     const subjectName = inputName.value.trim();
  
//     if (subjectAb && subjectName) {
//       subjectsInfo.push({
//         classNaim: `${subjectAb}-hours`,
//         abbreviation: subjectAb,
//         name: subjectName
//       });
  
//       renderSubjectHours(); // re-render the subjects list
//     }
//   }  

// document.addEventListener('DOMContentLoaded', () => {
//     const boxes = document.querySelectorAll('.box');
//     const inputs = document.querySelectorAll('.subject-skill');
//     let selectedColor = '';

//     // Load colors from localStorage on page load
//     boxes.forEach(box => {
//         const savedColor = localStorage.getItem(box.id);
//         if (savedColor) {
//             box.style.backgroundColor = savedColor;
//         }

//         box.addEventListener('click', () => {
//             if (box.classList.contains('reset')) {
//                 selectedColor = '';
//             } else if (!selectedColor && box.classList.contains('subject-idenity-color')) {
//                 selectedColor = window.getComputedStyle(box).backgroundColor;
//             } else {
//                 box.style.backgroundColor = selectedColor;
//                 localStorage.setItem(box.id, selectedColor); // Save color to localStorage
//             }
//         });
//     });

//     // Add event listener to .reset-ALL button
//     document.querySelector('.reset-ALL').addEventListener('click', () => {
//         // Reset colors for all boxes
//         boxes.forEach(box => {
//             box.style.backgroundColor = 'white'; // Reset to white
//             localStorage.removeItem(box.id); // Remove from localStorage
//         });

//         // Clear text in all inputs
//         inputs.forEach((input, index) => {
//             input.value = ''; // Clear the input
//             localStorage.removeItem(`subject-skill-${index}`); // Remove input value from localStorage
//         });
//     });
//     console.log(`${dsaCount} hr`);
// });
  

// // Function to save input values to localStorage
// function saveInputValue(input, key) {
//     localStorage.setItem(key, input.value);
// }

// function updateHoursCount() {
//     let counts = {};
  
//     // initialize counts for each subject
//     subjectsInfo.forEach(subject => {
//       counts[subject.abbreviation] = 0;
//     });
  
//     document.querySelectorAll('.subject-skill').forEach(input => {
//       for (const ab in counts) {
//         if (input.value.includes(ab)) {
//           counts[ab]++;
//         }
//       }
//     });
  
//     subjectsInfo.forEach(({ classNaim, abbreviation }) => {
//       const el = document.querySelector(`.${classNaim}`);
//       if (el) {
//         el.textContent = `${counts[abbreviation]} hr`;
//       }
//     });
//   }

// // Function to restore input values from localStorage
// function restoreInputValues() {
//     const inputs = document.querySelectorAll('.subject-skill');
//     inputs.forEach((input, index) => {
//         const key = `subject-skill-${index}`; // Create a unique key for each input
//         const savedValue = localStorage.getItem(key);
//         if (savedValue !== null) {
//             input.value = savedValue; // Restore the value
//         }
//         // Add event listener to save the value on change
//         input.addEventListener('input', () => saveInputValue(input, key));
//     });
// }

// // Call the restore function after the HTML is generated
// restoreInputValues();
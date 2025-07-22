renderSubjectHours();

function resetTasks() {
    subjectsInfo = [
      { classNaim: 'DSA-hours', abbreviation: 'DSA', name: 'Algorithms and Data Structures' },
      { classNaim: 'AUT-hours', abbreviation: 'AUT', name: 'Automata' },
      { classNaim: 'PRO-hours', abbreviation: 'PRO', name: 'Projects' },
      { classNaim: 'DAT-hours', abbreviation: 'DAT', name: 'Data Science' }
    ];
    renderSubjectHours();
}

function renderSubjectHours() {
    let hoursNumberHTML = `
    <div class = "right-align">
        <p class = "DSA-hours"></p>
        <p class = "AUT-hours"></p>
        <p class = "PRO-hours"></p>
        <p class = "DAT-hours"></p>
        <p>0 hr</p>
    </div>
    <div class = "middle-aligned">
        <p>DSA</p>
        <p>AUT</p>
        <p>PRO</p>
        <p>DAT</p>
        <input placeholder = "Abr."
        class = "js-abb-input abbreviation-input">
    </div>
    <div>
        <p>= Algorithms and Data Structures</p>
        <p>= Automata</p>
        <p>= Projects</p>
        <p>= Data Science</p>
        =<input placeholder = "Focus Hour Name"
        class = "js-focusHour-input focus-hour-input">
    </div>`;

    document.querySelector('.subjects-information').innerHTML = hoursNumberHTML;
}

function saveToStorage(){
    localStorage.setItem('subjectsInfo', JSON.stringify(subjectsInfo));
}

function addToSubjects(){
    const inputElement = document.querySelector('subject-abbreviation-input');
    const subjectAb = inputElement.value;

    const inputName = document.querySelector('subject-name-input');
    const subjectName = inputElement.value;

    subjectsInfo.push({
        subjectAb,
        subjectName
    });

    renderSubjectHours();
}


document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const inputs = document.querySelectorAll('.subject-skill');
    let selectedColor = '';
    let dsaCount = 0, autCount = 0, proCount = 0, datCount = 0;

    // Load colors from localStorage on page load
    boxes.forEach(box => {
        const savedColor = localStorage.getItem(box.id);
        if (savedColor) {
            box.style.backgroundColor = savedColor;
        }

        box.addEventListener('click', () => {
            if (box.classList.contains('reset')) {
                selectedColor = '';
            } else if (!selectedColor && box.classList.contains('subject-idenity-color')) {
                selectedColor = window.getComputedStyle(box).backgroundColor;
            } else {
                box.style.backgroundColor = selectedColor;
                localStorage.setItem(box.id, selectedColor); // Save color to localStorage
            }
        });
    });

    inputs.forEach(input => {
        if (input.value.includes("DSA")) {
            dsaCount++;
        } else if (input.value.includes("AUT")) {
            autCount++;
        } else if (input.value.includes("PRO")) {
            proCount++;
        } else if (input.value.includes("DAT")) {
            datCount++;
        }
    });

    const dsaHoursElement = document.querySelector('.DSA-hours');
    if (dsaHoursElement) {
        dsaHoursElement.textContent = `${dsaCount} hr`;
    }
    const autHoursElement = document.querySelector('.AUT-hours');
    if(autHoursElement){
        autHoursElement.textContent = `${autCount} hr`;
    }
    const proHoursElement = document.querySelector('.PRO-hours');
    if(proHoursElement){
        proHoursElement.textContent = `${proCount} hr`;
    }
    const datHoursElement = document.querySelector('.DAT-hours');
    if(datHoursElement){
        datHoursElement.textContent = `${datCount} hr`;
    }

    // Add event listener to .reset-ALL button
    document.querySelector('.reset-ALL').addEventListener('click', () => {
        // Show confirmation dialog
        const userConfirmed = confirm('ARE YOU SURE YOU WANT TO RESTART ALL?');

        if (userConfirmed) {
            // Reset colors for all boxes
            boxes.forEach(box => {
                box.style.backgroundColor = 'white'; // Reset to white
                localStorage.removeItem(box.id); // Remove from localStorage
            });

            // Clear text in all inputs
            inputs.forEach((input, index) => {
                input.value = ''; // Clear the input
                localStorage.removeItem(`subject-skill-${index}`); // Remove input value from localStorage
            });
        }
        // else do nothing
    });

    // The is the edit names buttons:
    document.querySelector('.edit-button').addEventListener('click', () => {
        
    });

    console.log(`${dsaCount} hr`);
});

// Function to save input values to localStorage
function saveInputValue(input, key) {
    localStorage.setItem(key, input.value);
}

// Function to restore input values from localStorage
function restoreInputValues() {
    const inputs = document.querySelectorAll('.subject-skill');
    inputs.forEach((input, index) => {
        const key = `subject-skill-${index}`; // Create a unique key for each input
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            input.value = savedValue; // Restore the value
        }
        // Add event listener to save the value on change
        input.addEventListener('input', () => saveInputValue(input, key));
    });
}

// Call the restore function after the HTML is generated
restoreInputValues();

// Lines 167 - 176 is Backend Practice
// Send "Apple" to backend when page loads
fetch('http://localhost:3000/save-word', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ word: 'Watermelon' })
})
.then(res => res.text())
.then(message => console.log(message))
.catch(err => console.error('Error: Dis not workin', err));
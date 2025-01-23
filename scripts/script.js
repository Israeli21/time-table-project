document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let selectedColor = '';

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

    document.querySelector('.reset-hours').addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'white'; // Reset to white
            localStorage.removeItem(box.id); // Remove from localStorage
        });
    });
});

document.querySelector('.generate-days').innerHTML = bodyHTML;

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
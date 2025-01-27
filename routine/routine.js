document.addEventListener('DOMContentLoaded', () => {
    const boxes2 = document.querySelectorAll('.box2');
    const inputs2 = document.querySelectorAll('.subject-skill2');
    let selectedColor2 = '';

    // Load colors from localStorage on page load
    boxes2.forEach(box => {
        const savedColor2 = localStorage.getItem(box.id);
        if (savedColor2) {
            box.style.backgroundColor = savedColor2;
        }

        box.addEventListener('click', () => {
            if (box.classList.contains('reset')) {
                selectedColor2 = '';
            } else if (!selectedColor && box.classList.contains('subject-idenity-color2')) {
                selectedColor2 = window.getComputedStyle(box).backgroundColor;
            } else {
                box.style.backgroundColor = selectedColor2;
                localStorage.setItem(box.id, selectedColor2); // Save color to localStorage
            }
        });
    });

    // Add event listener to .reset-ALL button
    document.querySelector('.reset-ALL').addEventListener('click', () => {
        // Reset colors for all boxes
        boxes2.forEach(box => {
            box.style.backgroundColor = 'white'; // Reset to white
            localStorage.removeItem(box.id); // Remove from localStorage
        });

        // Clear text in all inputs
        inputs2.forEach((input, index) => {
            input.value = ''; // Clear the input
            localStorage.removeItem(`subject-skill2-${index}`); // Remove input value from localStorage
        });
    });
});

// Function to save input values to localStorage
function saveInputValue(input, key) {
    localStorage.setItem(key, input.value);
}

// Function to restore input values from localStorage
function restoreInputValues() {
    const inputs2 = document.querySelectorAll('.subject-skill');
    inputs2.forEach((input, index) => {
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
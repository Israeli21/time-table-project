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
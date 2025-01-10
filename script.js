document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let selectedColor = ''; // Variable to store the selected color

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.classList.contains('reset')) {
                // Reset the selected color if a box with 'reset' class is clicked
                selectedColor = '';
            } else if (!selectedColor && box.classList.contains('subject-idenity-color')) {
                // If no color is selected, store the current box's background color
                selectedColor = window.getComputedStyle(box).backgroundColor;
            } else {
                // If a color is already selected, set the current box's background color to the selected color
                box.style.backgroundColor = selectedColor;
            }
        });
    });
});

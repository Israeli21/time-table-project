document.addEventListener('DOMContentLoaded', () => {
    const boxes2 = document.querySelectorAll('.box');
    let selectedColor2 = '';
    const pageKey = 'page2_'; // Unique identifier for this page

    // Load colors from localStorage on page load
    boxes2.forEach(box => {
        const savedColor2 = localStorage.getItem(pageKey + box.id);
        if (savedColor2) {
            box.style.backgroundColor = savedColor2;
        }

        box.addEventListener('click', () => {
            if (box.classList.contains('reset')) {
                selectedColor2 = '';
            } else if (!selectedColor2 && box.classList.contains('subject-idenity-color')) {
                selectedColor2 = window.getComputedStyle(box).backgroundColor;
            } else {
                box.style.backgroundColor = selectedColor2;
                localStorage.setItem(pageKey + box.id, selectedColor2); // Save with page key
            }
        });
    });

    // Add event listener to .reset-ALL button
    document.querySelector('.reset-ALL').addEventListener('click', () => {
        // Reset colors for all boxes
        boxes2.forEach(box => {
            box.style.backgroundColor = 'white'; // Reset to white
            localStorage.removeItem(pageKey + box.id); // Remove with page key
        });
    });
});
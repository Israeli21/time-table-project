let currentWeekOffset = 0;

function renderWeek() {
  const startOfWeek = dayjs().add(currentWeekOffset, 'week').startOf('week');
  document.querySelector('.body-grid-container').innerHTML = ''; // clear old days
  document.querySelector('.subjects-information').innerHTML = ''; // clear old subject info

  for (let i = 0; i < 7; i++) {
    const date = startOfWeek.add(i, 'day');
    const dayBox = document.createElement('div');
    dayBox.classList.add('day-box');
    dayBox.innerText = date.format('ddd, MMM D');

    // Load hours from localStorage if exists
    const storedHours = localStorage.getItem(`hours-${date.format('YYYY-MM-DD')}`);
    if (storedHours) {
      dayBox.innerHTML += `<p>${storedHours} hrs</p>`;
    }

    document.querySelector('.body-grid-container').appendChild(dayBox);
  }
}

document.querySelector('.next-week').addEventListener('click', () => {
  currentWeekOffset++;
  renderWeek();
});

document.querySelector('.previous-week').addEventListener('click', () => {
  currentWeekOffset--;
  renderWeek();
});

// Initial render
renderWeek();

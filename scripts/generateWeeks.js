function createWeekHTML(weekOffset = 0) {
  // Build the main container div
  const superSection = document.createElement('div');
  superSection.className = 'super-section';

  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = 'previous-week';
  prevButton.innerHTML = `
    <img src="images/left-arrow.png" class="left-arrow-img">
    <p class="tool-tip">Previous Week</p>
  `;
  superSection.appendChild(prevButton);

  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = 'next-week';
  nextButton.innerHTML = `
    <img src="images/right-arrow.png" class="right-arrow-img">
    <p class="tool-tip">Next Week</p>
  `;
  superSection.appendChild(nextButton);

  // Body grid container
  const bodyGrid = document.createElement('div');
  bodyGrid.className = 'body-grid-container generate-days';
  superSection.appendChild(bodyGrid);

  // Subject tracker text
  const subjectText = document.createElement('p');
  subjectText.className = 'subject-tracker-text';
  subjectText.textContent = 'Subjects Information:';
  superSection.appendChild(subjectText);

  // Subjects info container
  const subjectsInfo = document.createElement('div');
  subjectsInfo.className = 'subjects-information';
  superSection.appendChild(subjectsInfo);

  // Append everything to the target container
  document.querySelector('.generate-multiple-weeks').innerHTML = '';
  document.querySelector('.generate-multiple-weeks').appendChild(superSection);

  // Dynamically load scripts
  loadScript('https://unpkg.com/dayjs@1.11.10/dayjs.min.js');
  loadScript('scripts/generateDays.js', () => {
    generateDays(weekOffset); // if your generateDays.js exposes a function to generate days by offset
  });
  loadScript('scripts/screenshot.js');
  loadScript('scripts/subjectHours.js');
  loadScript('scripts/script.js');

  // Set up button click handlers
  prevButton.addEventListener('click', () => createWeekHTML(weekOffset - 1));
  nextButton.addEventListener('click', () => createWeekHTML(weekOffset + 1));
}

function loadScript(src, onLoad) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = onLoad || null;
  document.body.appendChild(script);
}

// Initial call
createWeekHTML(0);

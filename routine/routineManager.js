let startDate = dayjs('2025-02-01');

const weekDays = [
    { day: "Saturdays" },
    { day: "Sundays" },
    { day: "Mondays" },
    { day: "Tuesdays" },
    { day: "Wednesdays" },
    { day: "Thursdays" },
    { day: "Fridays" }
];

const today = dayjs();
const deliveryDate = today.format('MMM. D, YYYY');
console.log(deliveryDate);

let bodyHTML = `
    <div class = "weekday-container primary-legend-container">
        <div class="content-wrapper">
            <a href = "todo-list.html">
                <button class = "todo-list">To Do List</button>
            </a>
            <a href = "timeTable.html">
                <button>Time Table</button>
            </a>
            <div>
                <p class="website-title">Routine Map</p>
                <p class="subtitle-purpose">Routine Manager</p>
            </div>
        </div>
        <p class = "subjects-text">Subjects:</p>
        <div class = "grid-container subjects-container">
            <div>
                <div class="box subject-idenity-color sleep" id="box-1"></div>
                <div class="box subject-idenity-color social" id="box-1"></div>
                <div class="box subject-idenity-color work" id="box-1"></div>
                <div class="box subject-idenity-color art" id="box-1"></div>
                <div class="box subject-idenity-color school" id="box-1"></div>
            </div>
            <div>
                <p class = "hour-labels labels-extra">SLEEP</p>
                <p class = "hour-labels labels-extra">SOCIAL</p>
                <p class = "hour-labels labels-extra">WORK</p>
                <p class = "hour-labels labels-extra">ART</p>
                <p class = "hour-labels labels-extra">SCHOOL</p>
            </div>
            <div>
                <div class="box subject-idenity-color CS" id="box-1"></div>
                <div class="box subject-idenity-color reading" id="box-1"></div>
                <div class="box subject-idenity-color org" id="box-1"></div>
                <div class="box subject-idenity-color exercise" id="box-1"></div>
                <div class="box subject-idenity-color reset" id="box-1"></div>
            </div>
            <div>
                <p class = "hour-labels labels-extra">COMPUTER SCI</p>
                <p class = "hour-labels labels-extra">READING</p>
                <p class = "hour-labels labels-extra">ORGANIZATION</p>
                <p class = "hour-labels labels-extra">EXERCISE</p>
                <p class = "hour-labels labels-extra">(RESET COLOR)</p>
            </div>
        </div>
        <button class="reset-ALL">RESET ALL</button>
    </div>
`

weekDays.forEach((weekDay, index) => {
    // Calculate the date for the current day in the week
    const currentDate = startDate.add(index, 'day').format('MMM. D, YYYY');
    
    let morningHTML = '';
    let eveningHTML = '';
    
    // Generate morning and evening hour blocks
    for(let hour = 0; hour < 12; hour++) {
        morningHTML += `<div class="box" id="box-${weekDay.day}-${hour}"></div>`;
    }
    for(let hour = 12; hour < 24; hour++) {
        eveningHTML += `<div class="box" id="box-${weekDay.day}-${hour}"></div>`;
    }

    // Add to the HTML for the week
    bodyHTML += `
    <div class = "weekday-container">
        <div class="single-weekday-container">
            <div>
                <p class = "single-weekday">${weekDay.day}</p>
            </div>
            <div class="weekday-date">${currentDate}</div>
        </div>
        <div class="grid-container">
            <div class = "hour-labels-container">
                <p class = "hour-labels">12am</p>
                <p class = "hour-labels">1am</p>
                <p class = "hour-labels">2am</p>
                <p class = "hour-labels">3am</p>
                <p class = "hour-labels">4am</p>
                <p class = "hour-labels">5am</p>
                <p class = "hour-labels">6am</p>
                <p class = "hour-labels">7am</p>
                <p class = "hour-labels">8am</p>
                <p class = "hour-labels">9am</p>
                <p class = "hour-labels">10am</p>
                <p class = "hour-labels">11am</p>
            </div>
            <div>
                ${morningHTML}
            </div>
            <div>
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
            </div>
            <div>
                <p class = "hour-labels">12pm</p>
                <p class = "hour-labels">1pm</p>
                <p class = "hour-labels">2pm</p>
                <p class = "hour-labels">3pm</p>
                <p class = "hour-labels">4pm</p>
                <p class = "hour-labels">5pm</p>
                <p class = "hour-labels">6pm</p>
                <p class = "hour-labels">7pm</p>
                <p class = "hour-labels">8pm</p>
                <p class = "hour-labels">9pm</p>
                <p class = "hour-labels">10pm</p>
                <p class = "hour-labels">11pm</p>
            </div>
            <div>
                ${eveningHTML}
            </div>
            <div>
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
                <input type = "text" class = "subject-skill">
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.generate-days').innerHTML = bodyHTML;
/**
 * Active learning: A simple calendar
 */

var select = document.querySelector('select');

var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = () => {
    var choice = select.value;
    var days = 31;
    if (choice === 'February') {
        days = 28;
    } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
        days = 30;
    } else {
        days = 31;
    }
    createCalender(days, choice);
}

function createCalender(days, choice) {
    h1.textContent = choice;
    list.innerHTML = '';

    for (let i = 1; i <= days; i++) {
        var listIteam = document.createElement('li');
        listIteam.textContent = i;
        list.appendChild(listIteam);
    }
}

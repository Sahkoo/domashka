/* Завдання1 */
function displayBev() {
    let selectedBeverage = document.querySelector(".beverage").value;

    let message;
    switch (selectedBeverage) {
        case 'coffee':
            message = 'Ви обрали: Кава';
            break;
        case 'tea':
            message = 'Ви обрали: Чай';
            break;
        case 'juice':
            message = 'Ви обрали: Сік';
            break;
        default:
            message = 'Будь ласка, оберіть напій';
    }

    document.querySelector(".messageBlock").textContent = message;
}

/* Завдання2 */
function checkDay() {
    let day = document.querySelector(".dayInput").value.toLowerCase();
    let resultDiv = document.querySelector(".result");
    let message;

    switch (day) {
        case "понеділок":
        case "вівторок":
        case "середа":
        case "четвер":
        case "п'ятниця":
            message = "Це робочий день.";
            break;
        case "субота":
        case "неділя":
            message = "Це вихідний день.";
            break;
        default:
            message = "Введено некоректний день тижня.";
    }

    resultDiv.textContent = message;
}

/* Завдання3 */
function season() {
    let monthInput = parseInt(document.querySelector(".monthInput").value, 10);
    let result2 = document.querySelector(".result2");
    let message;

    switch (monthInput) {
        case 12:
        case 1:
        case 2:
            message = "Це зима.";
            break;
        case 3:
        case 4:
        case 5:
            message = "Це весна.";
            break;
        case 6:
        case 7:
        case 8:
            message = "Це літо.";
            break;
        case 9:
        case 10:
        case 11:
            message = "Це осінь.";
            break;
        default:
            message = "Введено некоректний номер місяця.";
    }

    result2.textContent = message;
}



/* Завдання4 */
function checkDays() {
    let monthINum = parseInt(document.querySelector(".monthNum").value, 10);
    let result3 = document.querySelector(".result3");
    let daysInMonth;

    switch (monthINum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            daysInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        case 2:
            let year = new Date().getFullYear();
            daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
            break;
        default:
            result3.textContent = "Введено некоректний номер місяця.";
            return;
    }

    result3.textContent = "У цьому місяці " + daysInMonth + " днів.";
}




/* Завдання5 */
function checkColor() {
    let inputColor = document.querySelector(".inputColor").value.toLowerCase();
    let result4 = document.querySelector(".result4");
    let action;

    switch (inputColor) {
        case "червоний":
            action = "Стоп";
            break;
        case "зелений":
            action = "Йти";
            break;
        case "жовтий":
            action = "Чекати";
            break;
        default:
            action = "Дію не визначено для цього кольору.";
            break;
    }

    result4.textContent = action;
}




/* Завдання6 */
function operation() {
    let number1 = parseFloat(document.querySelector(".number1").value);
    let number2 = parseFloat(document.querySelector(".number2").value);
    let operations = document.querySelector(".operations").value;
    let result5 = document.querySelector(".result5");
    let result;

    switch (operations) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result5.textContent = "Помилка: ділення на нуль!";
                return;
            }
            break;
        default:
            result5.textContent = "Невідома операція.";
            return;
    }

    result5.textContent = "Результат: " + result;
}
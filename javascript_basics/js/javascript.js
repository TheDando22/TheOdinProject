let a = 123.412;
let b = Math.floor(Math.random(Number));

console.log('TheOdinProject Practice');

number = Math.floor(Math.random() * 100);
console.log('starting number: ' + number);

function showNumber(number) {
    let show = document.getElementById('show_number').innerHTML = number;
    return show;
}

function add7(number) {
    let result = number + 7;
    console.log('add7:' + result);
    document.getElementById('first_test').innerHTML = result;
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    console.log('multiply: ' + result);
    document.getElementById('second_test').innerHTML = result;
    return result;
}

function capitalize(string) {
    console.log('capitalize Before: ' + string);
    let cap = string[0].toUpperCase() + string.slice(1, string.length);
    console.log('capitalize After: ' + cap);
    document.getElementById('third_test').innerHTML = cap;
    return string;
}

function lastLetter (string) {
    console.log('String: ' + string);
    let result = string[string.length - 1];
    console.log('String last letter: ' + result);
    document.getElementById('fourth_test').innerHTML = 'Original: ' + string + ' ' + 'Result: ' + result;
    return result;
}
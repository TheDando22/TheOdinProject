
// Active Learning
const output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10;i >= 0;i--){ 
    const para = document.createElement('p');
    para.textContent = i;
    if (i === 10) {
        para.textContent = 'Countdown' + i;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
}



// Loops Test your skills 1
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

for (let i = 0;i < myArray.length;i++) {
    let listItem = document.createElement('li');
    listItem.textContent = myArray[i];
    list.appendChild(listItem);
    if (i !== myArray.length - 1) {
        listItem.textContent = myArray[i] += ', ';
    } else {
        listItem.textContent = "and " + myArray[i] + ".";
    }
    // loops1.appendChild(listItem);
}

    // Don't edit the code below here!

const loops1 = document.querySelector('.loops1');
loops1.appendChild(list);

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
        list = myArray[i];
        if (i === myArray.length - 1) {
            list += 'and ' + myArray[i] + '.';
        } else {
            list += myArray[i] + ', ';
        }
    }

    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);
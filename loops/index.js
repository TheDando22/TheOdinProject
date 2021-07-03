
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


function findName() {

    const name = 'Mustafa';
    let i = 0;
    let para2 = document.createElement('p');

    let phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
    ];

    while(i < phonebook.length) {
        if (phonebook[i].name === name) {
            para2.textContent = "Name: " + phonebook[i].name + " Number: " + phonebook[i].number;
            break;
        } else {
            para2.textContent = "No match.";
        }
        i++;    
    }
    
    let loops2 = document.querySelector('.loops2');
    loops2.appendChild(para2);
}

function loops3() {
    let i = 500;
    let para3 = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }

    do {
        if(isPrime(i)) {
            para3.textContent += i + ", \n";
        }
        i--;
    } while (i > 1);

    // Don't edit the code below here!
    let loops3 = document.querySelector('.loops3');
    loops3.appendChild(para3);
}

loops3();
findName();

// Don't edit the code below here!

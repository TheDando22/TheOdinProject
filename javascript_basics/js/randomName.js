let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

function random(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}

function chooseName(array) { 
    let randomName = array[random(0, array.length)];
    return randomName;
}// Add your code here

para.textContent = chooseName(names);

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);
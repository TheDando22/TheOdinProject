let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.querySelector('p');
let section = document.getElementById('mdn_basics');

function random(min, max){
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}

function randomName(array) {
    let name = array[random(0, array.length)];
    console.log('random name in array: ' + name);
    para.textContent(name);
    return name;
}

section.innerHTML = ' ';

section.appendChild(para);
    
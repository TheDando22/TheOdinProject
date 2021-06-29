let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

function random(min, max){
    const result = Math.floor(Math.random() * (max - min)) + min;
    console.log('result: ' + result);
    return result;
}

function randomName(array) {
    let name = array[random(0, array.length)];
    console.log(name);
    return name;
}

para.textContent = randomName(names);

section.innerHTML = ' ';

section.appendChild(para);
    
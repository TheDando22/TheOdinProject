let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.querySelector('p');

function randomName() {
    let name = Math.floor(Math.random() * names.length);
    let choice = names[name];
    para.textContent = choice;
}

randomName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
    
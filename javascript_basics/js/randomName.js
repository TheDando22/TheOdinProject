let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
    let para = document.createElement('p');

    function chooseName() { 
        let randomName = Math.floor(Math.random() * names.length);
        let name = names[randomName];
        para.textContent = name;

    }// Add your code here

    chooseName();

    // Don't edit the code below here!

    const section = document.querySelector('section');

    section.appendChild(para);
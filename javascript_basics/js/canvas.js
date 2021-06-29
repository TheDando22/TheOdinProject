const btn = document.querySelector('button');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let x = 50;
    let y = 60;
    let width = 100;
    let height = 75;
    let color = 'blue';

    function draw(x, y, width, height, color) {
        // Outside Rectangle
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Blue Rectangle
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = color;
        
    }

    draw(x, y, width, height, color);

    function deleteRect() {
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
    }

    btn.addEventListener('click',deleteRect);
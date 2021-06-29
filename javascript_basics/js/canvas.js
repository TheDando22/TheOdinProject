const btn = document.querySelector('button');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    let x = 50;
    let y = 60;
    let WIDTH = 100;
    let HEIGHT = 75;
    let color = 'blue';

    function draw() {
        ctx.fillRect(x, y, WIDTH, HEIGHT);
        ctx.fillRect(0,0, canvas.WIDTH, canvas.HEIGHT);
        ctx.stroke();
      }

    btn.addEventListener('click',draw);
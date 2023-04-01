const canvas = document.querySelector('canvas')
const drawingSurface = canvas.getContext('2d')

canvas.width = 800;
canvas.height = 600;


const carObject = {
    x: 300,
    y: 300,
    width: 30,
    height: 50
}

const car = new Car(carObject.x, carObject.y, carObject.width, carObject.height)

function animate() {
    //clear canvas
    drawingSurface.fillStyle = "white";
    drawingSurface.fillRect(0, 0, canvas.width, canvas.height);

    car.update();
    car.draw();


    requestAnimationFrame(animate);
}

animate();
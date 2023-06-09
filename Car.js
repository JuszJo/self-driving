class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "black";
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 5;
        this.friction = 0.025;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        if(this.controls.forward) {
            this.speed += this.acceleration;
        }
        if(this.controls.reverse) {
            this.speed -= this.acceleration;
        }
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed) {
            this.speed = -this.maxSpeed;
        }
        if(this.speed > 0) {
            this.speed -= this.friction;
        }
        if(this.speed < 0) {
            this.speed += this.friction;
        }
        if(Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }
        if(this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if(this.controls.left) {
                this.angle += 0.03 * flip;
            }
            if(this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        // Math.sin(angle) will give the projection on the x axis
        // Math.cos(angle) will give the projection on the y axis

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;

        // console.log((Math.sin(this.angle) * this.speed), Math.cos(this.angle) * this.speed);
        // console.log(this.x, this.y);
        // console.log(Math.sin(this.angle), Math.cos(this.angle));
        
        // console.log(Math.cos(this.angle));
    }

    draw() {
        // read up on save
        drawingSurface.save()
        drawingSurface.translate(this.x, this.y)
        drawingSurface.rotate(-this.angle)

        //center car in its middle
        drawingSurface.fillStyle = this.color;
        drawingSurface.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

        drawingSurface.restore();
    }
}
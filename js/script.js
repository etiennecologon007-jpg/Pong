const canvas=document.getElementById("monCanvas");
const context=canvas.getContext('2d');
let widthCanvas=280;
let heightCanvas=500;
canvas.width=widthCanvas;
canvas.height=heightCanvas;

class Cercle{
    constructor(x,y,rayon,color,speed){
        this.posx=x;
        this.posy=y;
        this.rayon=rayon;
        this.color=color;
        this.speed=speed;
        this.dx=1*speed;
        this.dy=1*speed;
    }

    draw(){
        context.beginPath();
        context.arc(this.posx,this.posy,this.rayon,0,Math.PI*2);
        context.fillStyle=this.color;
        context.fill();
        context.closePath();
    }



    update(){
        context.clearRect(0,0,widthCanvas,heightCanvas);
        this.draw();   
        if((this.posx+this.rayon)>=widthCanvas){
            this.speed++;
            this.dx=-(this.speed*1);
            
        }
        if((this.posy+this.rayon)>=heightCanvas){
            this.speed++;
            this.dy= -(1*this.speed);
            
        }
        if((this.posx-this.rayon)<=0){
            this.speed++;
            this.dx=1* this.speed;
            
        }
        if((this.posy-this.rayon)<=0){
            this.speed++;
            this.dy= 1*this.speed;
            
        }
        this.posx+=this.dx;
        this.posy+=this.dy;
    }

}

let monCercle= new Cercle(50,50,10,"black",6);
monCercle.draw();
let updateCircle=function(){
    requestAnimationFrame(updateCircle);
    console.log("x="+monCercle.posx);
    console.log("y="+monCercle.posy);
    monCercle.update();
}
updateCircle();

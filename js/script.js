const canvas=document.getElementById("monCanvas");
const context=canvas.getContext('2d');
canvas.width=280;
canvas.height=500;

class Cercle{
    constructor(x,y,rayon,color,speed){
        this.posx=x;
        this.posy=y;
        this.rayon=rayon;
        this.color=color;
        this.speed=speed;
    }

    draw(){
        context.beginPath();
        context.arc(this.posx,this.posy,this.rayon,0,Math.PI*2);
        context.fillStyle=this.color;
        context.fill();
    }

}

let monCercle= new Cercle(50,50,10,"black",10);
monCercle.draw();
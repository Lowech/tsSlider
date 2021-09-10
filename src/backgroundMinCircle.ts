export class BackgroundMinCircle{
    backgroundMinCircle: any ;
    constructor(backgroundMinCircle: any){
        this.backgroundMinCircle= backgroundMinCircle;
        this.backgroundMinCircle.classList.add("background-min__circle");
    }
    verticalPosition(){
        this.backgroundMinCircle.classList.add("background-min__circle_vertical-position");
    }
}
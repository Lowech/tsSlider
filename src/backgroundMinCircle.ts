export class BackgroundMinCircle{
    backgroundMinCircle: HTMLElement  ;
    constructor(backgroundMinCircle: HTMLElement ){
        this.backgroundMinCircle= backgroundMinCircle;
        this.backgroundMinCircle.classList.add("background-min__circle");
    }
    verticalPosition(){
        this.backgroundMinCircle.classList.add("background-min__circle_vertical-position");
    }
}
export class BackgroundMaxCircle{
    backgroundMaxCircle: any ;
    constructor(backgroundMaxCircle: any){
        this.backgroundMaxCircle= backgroundMaxCircle;
        this.backgroundMaxCircle.classList.add("background-max__circle");
    }
    verticalPosition(){
        this.backgroundMaxCircle.classList.add("background-max__circle_vertical-position");
    }
}
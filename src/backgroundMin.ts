export class BackgroundMin{
    backgroundMin: any ;
    constructor(backgroundMin: any){
        this.backgroundMin= backgroundMin;
        this.backgroundMin.classList.add("background-min");
    }
    verticalPosition(){
        this.backgroundMin.classList.add("background-min_vertical-position");
    }
}
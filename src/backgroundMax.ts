export class BackgroundMax{
    backgroundMax: any ;
    constructor(backgroundMax: any){
        this.backgroundMax= backgroundMax;
        this.backgroundMax.classList.add("background-max");
    }
    verticalPosition(){
        this.backgroundMax.classList.add("background-max_vertical-position");
    }
}

 export class SumMin{
    sumMin: any ;
    value: number | string;
    constructor(sumMin: any){
        this.sumMin= sumMin;
        this.sumMin.classList.add("sum-min");
    }
    verticalPosition(){
        this.sumMin.classList.add("sum-min_vertical-position");
    }
}

 
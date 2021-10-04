export class SumMax{
    sumMax: any ;
    value: number | string;
    constructor(sumMax: any){
        this.sumMax= sumMax;
        this.sumMax.classList.add("sum-max");
        
    }
    verticalPosition(){
        this.sumMax.classList.add("sum-max_vertical-position");
    }
}
export class SumMax{
    sumMax: any ;
    value: number | string;
    constructor(sumMax: any){
        this.sumMax= sumMax;
        this.sumMax.classList.add("sum-max");
        
    }
    sum(){
        this.sumMax.value="10 000₽";
    }
    verticalPosition(){
        this.sumMax.classList.add("sum-max_vertical-position");
    }
}
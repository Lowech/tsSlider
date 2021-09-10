
 export class SumMin{
    sumMin: any ;
    value: number | string;
    constructor(sumMin: any){
        this.sumMin= sumMin;
        this.sumMin.classList.add("sum-min");
    }
    sum(){
        this.sumMin.value="5 000₽";
        console.log(this.sumMin)
    }
}

 
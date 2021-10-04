import * as $ from "jquery";
import test from './test.js';
import './controlPanel/controlPanel.js'
import './index.sass';
import './index.pug';
import {SumMin} from './SumMin';
import {SumMax} from './SumMax';
import {BackgroundMinCircle} from './BackgroundMinCircle';
import {BackgroundMaxCircle} from './BackgroundMaxCircle';
import {BackgroundMin} from './BackgroundMin';
import {BackgroundMax} from './BackgroundMax';
import {ConcreteSubject} from './Observer';

console.log(test)
declare global {
  interface JQuery {
    rangeSlider(arg: any): JQuery;
  }
}
(function($){
    $.fn.rangeSlider=function(options){
      const settings=$.extend({
        oneRange: false,
        verticalPosition: false,
        minValue: 5000 ,
        maxValue: "10000 р",
        step: 10,
        noMeaning: false,
      },options);
      
    
   
      return this.each(function(){
        
  /*************************view block********************************************/
  class View extends ConcreteSubject{
    SumMin: any
    SumMax: any
    BackgroundMinCircle: { backgroundMinCircle: { style: { left: any; top: string; }; }; verticalPosition: () => void; }
    BackgroundMaxCircle: { backgroundMaxCircle: { getBoundingClientRect: () => { (): any; new(): any; left: number; top: number; }; style: { left: string; top: string; }; }; verticalPosition: () => void; }
    BackgroundMin: any
    BackgroundMax: any
    constructor(
      SumMin: any,
      SumMax: any,
      BackgroundMinCircle: any,
      BackgroundMaxCircle: any,
      BackgroundMin: any,
      BackgroundMax: any)
      
      {
        
      super();
      
      this.SumMin=SumMin;
      this.SumMax=SumMax;
      this.BackgroundMinCircle=BackgroundMinCircle;
      this.BackgroundMaxCircle=BackgroundMaxCircle;
      this.BackgroundMin=BackgroundMin;
      this.BackgroundMax=BackgroundMax;
    }
    
    setsMinValue(e: number ){
      console.log(e)
        this.BackgroundMinCircle.backgroundMinCircle.style.left=e[0];
        this.BackgroundMin.backgroundMin.style.width=e[1];
        this.SumMin.sumMin.value=e[2];  
    }
    setsMaxValue(e: number ){
      
      this.BackgroundMaxCircle.backgroundMaxCircle.style.left=e[0];
      this.BackgroundMax.backgroundMax.style.width=e[1];
      this.SumMax.sumMax.value=e[2];  
  }
  setsMinValueInput(e){
    console.log(e)
    this.BackgroundMinCircle.backgroundMinCircle.style.left=e[1]-2+"px";
    this.BackgroundMin.backgroundMin.style.width=e[1]+"px";
  }
    coords(){
      
    return  [ 
      this,
      this.SumMin.sumMin.value,
      this.SumMax.sumMax.value,
      this.BackgroundMinCircle.backgroundMinCircle.style.left=this.SumMin.sumMin.value+"px",
      this.BackgroundMaxCircle.backgroundMaxCircle.style.left,
      this.BackgroundMin.backgroundMin.style.width=this.SumMin.sumMin.value+"px",
      this.BackgroundMax.backgroundMax.style.width,
    ]
    }
    SumMinValue(){     
this.SumMin.sum() 

    }
    SumMaxValue(){     
      this.SumMax.sum() 
          }
  }
const subView=  new View(
  new SumMin(document.createElement("input")),
  new SumMax(document.createElement("input")),
  new BackgroundMinCircle(document.createElement("div")),
  new BackgroundMaxCircle(document.createElement("div")),
  new BackgroundMin(document.createElement("div")),
  new BackgroundMax(document.createElement("div")));
subView.SumMin.sumMin.value=settings.minValue;
subView.SumMax.sumMax.value=settings.maxValue;


        let  rangeSlider= document.createElement("div");
        rangeSlider.classList.add("range-slider");
  
        let  sumBlock=document.createElement("div");
        sumBlock.classList.add("sum-block");
  
        let  bandContainer=document.createElement("div");
        bandContainer.classList.add("band-container");
  
        let  rangeSliderText=document.createElement("div");

    rangeSlider.append(sumBlock,bandContainer,rangeSliderText);
    sumBlock.append(subView.SumMin.sumMin,subView.SumMax.sumMax);
    bandContainer.append(subView.BackgroundMin.backgroundMin,subView.BackgroundMax.backgroundMax);
    subView.BackgroundMin.backgroundMin.append(subView.BackgroundMinCircle.backgroundMinCircle);
    subView.BackgroundMax.backgroundMax.append(subView.BackgroundMaxCircle.backgroundMaxCircle);
    this.append(rangeSlider)
        //rangeSliderText.classList.add("range-slider-text");
  /************************* end view block ********************************************/
 
  /************************* model block ********************************************/
    class Model extends ConcreteSubject{
      coords: object
      
      constructor(coords: object){
        super();
        this.coords=coords;
      
      }
      setCoords(coords: object){
       this.coords=coords ;
      }
      getCoords(){
        
       return this.coords;
      }
      
      valueСhanges(event: { clientX: number; target: any }){
        
          if(event.clientX<=bandContainer.getBoundingClientRect().right && 
          event.clientX>=bandContainer.getBoundingClientRect().left){
            
          return  true;
          }
      }
      setsMinValue(event: { clientX: number; }) {
    
        return  [
        event.clientX-bandContainer.getBoundingClientRect().left-8+"px",
        event.clientX-bandContainer.getBoundingClientRect().left+2+"px",
        Math.trunc(settings.step*event.clientX)];
     
      }
      setsMaxValue(event: { clientX: number; target: any }){
        return[
        event.clientX-bandContainer.getBoundingClientRect().left-8+"px",
        event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left+2+"px",
        `${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`,
       ]
      }
      eventInputMinValue(c: object){
        
        return c=this.getCoords();
          
         
      }
    }
    const subModel= new Model(subView.coords());
    
    //console.log(subModel.getCoords())
    //rangeSliderText.innerHTML="Стоимость за сутки пребывания в номере";
  
    //leftArrowNumberBlock.innerHTML="<span class=left-arrow-number>1</span>";
  
  /************************* end model block ********************************************/
  if(settings.oneRange===true){
    subView.BackgroundMin.backgroundMin.style.display="none";
  }
  interface fffd{
    
  }
  /************************* controller block ********************************************/
  
  class Presenter extends ConcreteSubject {
    subModel: any
    subView: any
    constructor(subModel: any,subView: any){
    super();
this.subModel=subModel;
this.subView=subView;

    }
    
   changeCoordsMinValue(event){
    
      if(event.target.className==="background-min__circle"){
        if(event.clientX>=bandContainer.getBoundingClientRect().right || 
        event.clientX<=bandContainer.getBoundingClientRect().left || 
        event.clientX>=subView.BackgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().left){
          return;
        }
      else{
        this.subModel.setCoords(this.subView.coords())
        //this.subView.SumMin.sumMin.focus()
        this.subView.setsMinValue(this.subModel.setsMinValue(event)) 
            //console.log(this.subView.BackgroundMinCircle.backgroundMinCircle)
          
      }}
  }
  changeCoordsMaxValue(event){
    if(event.clientX>=bandContainer.getBoundingClientRect().right || 
    event.clientX<=bandContainer.getBoundingClientRect().left ){
      return;
    }
  else{
    this.subView.setsMaxValue(this.subModel.setsMaxValue(event))
  }
  }
    mouseup(event: MouseEvent){
      
      
      this.subView.BackgroundMinCircle.backgroundMinCircle.removeEventListener('mousemove',coordinateСhangesMinValue);
      this.subView.BackgroundMaxCircle.backgroundMaxCircle.removeEventListener('mousemove',coordinateСhangesMaxValue);
    }
    
  
    mousedown(event: MouseEvent){
      
      if(this.subModel.valueСhanges(event)===true){
        if(event.target===this.subView.BackgroundMinCircle.backgroundMinCircle){
          this.subView.BackgroundMinCircle.backgroundMinCircle.addEventListener("mousemove",coordinateСhangesMinValue);
        } 
        if(event.target===this.subView.BackgroundMaxCircle.backgroundMaxCircle){
          this.subView.BackgroundMaxCircle.backgroundMaxCircle.addEventListener("mousemove",coordinateСhangesMaxValue);  
        } 
      }

      };
      eventInput(){

        
        
        //this.subModel.eventInputMinValue(this.subView.coords())
        if(+this.subView.SumMin.sumMin.value>100 || +this.subView.SumMin.sumMin.value<0)return;
        this.subModel.setCoords(this.subView.coords())
        this.subView.setsMinValueInput(this.subModel.eventInputMinValue(this.subView.coords()))
        
      }
    }
    const subPresenter = new Presenter(subModel,subView);
  
////обработчики событий
  document.addEventListener("mousedown", (event)=>
  subPresenter.mousedown(event)
  
  );
  
  document.addEventListener("mouseup",(event)=>
  
    subPresenter.mouseup(event)
  );
  

  document.addEventListener("input",()=>{
    
      subPresenter.eventInput();
    
    
    //subPresenter.subView.setsMinValueInput(this.subView.SumMin.sumMin.value)
    
  }
  
  );
  
  
  function coordinateСhangesMinValue(event){
    subPresenter.changeCoordsMinValue(event);
   }
   function coordinateСhangesMaxValue(event){
    subPresenter.changeCoordsMaxValue(event);
   }
   
  //
  ////////
  
  function verticalMovement(event: { clientY: number; clientX: number; target: { getBoundingClientRect: () => { (): any; new(): any; top: number; }; }; }){
    if(settings.verticalPosition===true){

      subView.SumMax.sumMax.verticalPosition();
      subView.SumMin.sumMin.verticalPosition();
      subView.BackgroundMinCircle.verticalPosition();
      subView.BackgroundMin.verticalPosition();
      subView.BackgroundMaxCircle.verticalPosition();
      subView.BackgroundMax.verticalPosition();

      rangeSlider.classList.add("range-slider_vertical-position");
      sumBlock.classList.add("sum-block_vertical-position");
      bandContainer.classList.add("band-container_vertical-position");

        if(event.clientY>=bandContainer.getBoundingClientRect().bottom || 
        event.clientY<=bandContainer.getBoundingClientRect().top || 
        event.clientY>=subView.BackgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().top){
          return;
        }
      else{
      
        subView.BackgroundMinCircle.backgroundMinCircle.style.top=event.clientX-bandContainer.getBoundingClientRect().top-8+"px";
        subView.BackgroundMin.backgroundMin.style.height=event.clientX-bandContainer.getBoundingClientRect().top+2+"px";
        
        subView.SumMin.sumMin.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().top)} ₽`;
      }
      if(event.clientX>=bandContainer.getBoundingClientRect().right || 
      event.clientX<=bandContainer.getBoundingClientRect().top ){
        return;
      }
    else{
      subView.BackgroundMaxCircle.backgroundMaxCircle.style.top=event.clientX-bandContainer.getBoundingClientRect().top-8+"px";
      subView.BackgroundMax.backgroundMax.style.height=event.target.getBoundingClientRect().top-bandContainer.getBoundingClientRect().top+2+"px";
    
      subView.SumMax.sumMax.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().top)} ₽`;
    } 
    }
  }
  ////////
    });
  }
  //////////////////////observer
  
  
  
  })(jQuery);
  $(".js-range-slider").rangeSlider({oneRange:false,minValue:2});
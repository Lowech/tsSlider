import * as $ from "jquery";
import './index.sass';
import './index.pug';
import {SumMin} from './SumMin';
import {SumMax} from './SumMax';
import {BackgroundMinCircle} from './BackgroundMinCircle';
import {BackgroundMaxCircle} from './BackgroundMaxCircle';
import {BackgroundMin} from './BackgroundMin';
import {BackgroundMax} from './BackgroundMax';

declare global {
  interface JQuery {
    rangeSlider(arg: any): JQuery;
  }
}
(function($){
    $.fn.rangeSlider=function(options){
      const settings=$.extend({
        oneRange: false,
        verticalPosition: false 
      },options);
      
    
   
      return this.each(function(event: any){
        
  /*************************view block********************************************/
  class View {
    SumMin: any
    SumMax: any
    BackgroundMinCircle: any
    BackgroundMaxCircle: any
    BackgroundMin: any
    BackgroundMax: any
    constructor(
      SumMin: any,
      SumMax: any,
      BackgroundMinCircle: any,
      BackgroundMaxCircle: any,
      BackgroundMin: any,
      BackgroundMax: any){
      this.SumMin=SumMin;
      this.SumMax=SumMax;
      this.BackgroundMinCircle=BackgroundMinCircle;
      this.BackgroundMaxCircle=BackgroundMaxCircle;
      this.BackgroundMin=BackgroundMin;
      this.BackgroundMax=BackgroundMax;
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
subView.SumMinValue();
subView.SumMaxValue();

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
    class Model{
      constructor(){

      }
      
      valueСhanges(event: { clientX: number; target: any }){
        
          if(event.clientX<=bandContainer.getBoundingClientRect().right && 
          event.clientX>=bandContainer.getBoundingClientRect().left){
            
          return  subPresenter.jp(true,event); 
          }
      }
      setsMinValue(event: { clientX: number; target: any }) {
        
        if(event.target.className==="background-min__circle"){
          if(event.clientX>=bandContainer.getBoundingClientRect().right || 
          event.clientX<=bandContainer.getBoundingClientRect().left || 
          event.clientX>=subView.BackgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().left){
            return;
          }
        else{
        
          subView.BackgroundMinCircle.backgroundMinCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
          subView.BackgroundMin.backgroundMin.style.width=event.clientX-bandContainer.getBoundingClientRect().left+2+"px";
          
          subView.SumMin.sumMin.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
        }
        }
        
      }
    }
    const subModel= new Model();
    
    //rangeSliderText.innerHTML="Стоимость за сутки пребывания в номере";
  
    //leftArrowNumberBlock.innerHTML="<span class=left-arrow-number>1</span>";
  
  /************************* end model block ********************************************/
  if(settings.oneRange===true){
    subView.BackgroundMin.backgroundMin.style.display="none";
  }
  
  /************************* controller block ********************************************/
  class Presenter{
    subModel: any
    subView: any
    constructor(subModel: any,subView: any){
this.subModel=subModel;
this.subView=subView;

    }
    mouseup(event: MouseEvent){
      
          subView.BackgroundMaxCircle.backgroundMaxCircle.removeEventListener('mousemove',setsMaxValue);
          subView.BackgroundMinCircle.backgroundMinCircle.removeEventListener('mousemove', this.subModel.setsMinValue(event));
       
    }
    
    mousedown(event: MouseEvent){
      console.log(this.subModel.setsMinValue(event))
      this.subModel.valueСhanges(event) 
      };
      jp(y: boolean,event: { clientX?: number; target: any; }){
        
        
        if(y===true){
          
          if(event.target===this.subView.BackgroundMinCircle.backgroundMinCircle){
             
            this.subView.BackgroundMinCircle.backgroundMinCircle.addEventListener("mousemove",( event: any )=> this.subModel.setsMinValue(event));
          }
          if(event.target===this.subView.BackgroundMaxCircle.backgroundMaxCircle){
            this.subView.BackgroundMaxCircle.backgroundMaxCircle.addEventListener("mousemove",setsMaxValue);  
          } 
        }
        
      }
    }
  
  

  document.addEventListener("mousedown", (event)=>
  subPresenter.mousedown(event) );
  
  document.addEventListener("mouseup",(event)=>
    subPresenter.mouseup(event)
  );
  
  const subPresenter = new Presenter(subModel,subView);
  
  //
  ////////
  function setsMaxValue(event: { clientX: number; target: { getBoundingClientRect: () => { (): any; new(): any; left: number; }; }; }){
    if(event.clientX>=bandContainer.getBoundingClientRect().right || 
    event.clientX<=bandContainer.getBoundingClientRect().left ){
      return;
    }
  else{
    subView.BackgroundMaxCircle.backgroundMaxCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
    subView.BackgroundMax.backgroundMax.style.width=event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left+2+"px";
  
    subView.SumMax.sumMax.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
  }
  }
  ////////
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
  })(jQuery);
  $(".js-range-slider").rangeSlider({oneRange:false});
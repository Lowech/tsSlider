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
      
    const sumMin=  new SumMin(document.createElement("input"));
    const sumMax= new SumMax(document.createElement("input"));
    const backgroundMinCircle= new BackgroundMinCircle(document.createElement("div"));
    const backgroundMaxCircle= new BackgroundMaxCircle(document.createElement("div"));
    const backgroundMin = new BackgroundMin(document.createElement("div"));
    const backgroundMax = new BackgroundMax(document.createElement("div"));
    sumMin.sum();
    sumMax.sum();
    console.log();
      return this.each(function(event){
        
  /*************************view block********************************************/
  
        let  rangeSlider= document.createElement("div");
        rangeSlider.classList.add("range-slider");
  
        let  sumBlock=document.createElement("div");
        sumBlock.classList.add("sum-block");
  
        let  bandContainer=document.createElement("div");
        bandContainer.classList.add("band-container");
  
        let  rangeSliderText=document.createElement("div");
        //rangeSliderText.classList.add("range-slider-text");
  /************************* end view block ********************************************/
 
  /************************* model block ********************************************/
    
    //rangeSliderText.innerHTML="Стоимость за сутки пребывания в номере";
  
    rangeSlider.append(sumBlock,bandContainer,rangeSliderText);
    sumBlock.append(sumMin.sumMin,sumMax.sumMax);
    bandContainer.append(backgroundMin.backgroundMin,backgroundMax.backgroundMax);
    backgroundMin.backgroundMin.append(backgroundMinCircle.backgroundMinCircle);
    backgroundMax.backgroundMax.append(backgroundMaxCircle.backgroundMaxCircle);
    this.append(rangeSlider)
  
    //leftArrowNumberBlock.innerHTML="<span class=left-arrow-number>1</span>";
  console.log(backgroundMax.backgroundMax)
    
        
  /************************* end model block ********************************************/
  if(settings.oneRange===true){
    backgroundMin.backgroundMin.style.display="none";
  }
  
  /************************* controller block ********************************************/
  document.addEventListener("mousedown",function valueСhanges(event){
    if(event.clientX<=bandContainer.getBoundingClientRect().right && 
    event.clientX>=bandContainer.getBoundingClientRect().left){
      if(event.target===backgroundMinCircle.backgroundMinCircle){
        backgroundMinCircle.backgroundMinCircle.addEventListener("mousemove", setsMinValue);
        
      }
      if(event.target===backgroundMaxCircle.backgroundMaxCircle){
        
        backgroundMaxCircle.backgroundMaxCircle.addEventListener("mousemove",setsMaxValue);
        
      }
      
      //console.log(bandBorder.getBoundingClientRect().width-event.clientX-bandContainer.getBoundingClientRect().left)
    }
    
    //console.log(event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left)
    
  });
  ////////
  function setsMaxValue(event){
    if(event.clientX>=bandContainer.getBoundingClientRect().right || 
    event.clientX<=bandContainer.getBoundingClientRect().left ){
      return;
    }
  else{
    backgroundMaxCircle.backgroundMaxCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
    backgroundMax.backgroundMax.style.width=event.target.getBoundingClientRect().left-bandContainer.getBoundingClientRect().left+2+"px";
  
    sumMax.sumMax.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
  }
  }
  ////////
  ////////
  function setsMinValue(event){
    if(event.clientX>=bandContainer.getBoundingClientRect().right || 
    event.clientX<=bandContainer.getBoundingClientRect().left || 
    event.clientX>=backgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().left){
      return;
    }
  else{
  
    backgroundMinCircle.backgroundMinCircle.style.left=event.clientX-bandContainer.getBoundingClientRect().left-8+"px";
    backgroundMin.backgroundMin.style.width=event.clientX-bandContainer.getBoundingClientRect().left+2+"px";
    
    sumMin.sumMin.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().left)} ₽`;
  }
  }
  console.log(backgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().top)
  function verticalMovement(event){
    if(settings.verticalPosition===true){

      sumMax.verticalPosition();
      sumMin.verticalPosition();
      backgroundMinCircle.verticalPosition();
      backgroundMin.verticalPosition();
      backgroundMaxCircle.verticalPosition();
      backgroundMax.verticalPosition();

      rangeSlider.classList.add("range-slider_vertical-position");
      sumBlock.classList.add("sum-block_vertical-position");
      bandContainer.classList.add("band-container_vertical-position");

        if(event.clientY>=bandContainer.getBoundingClientRect().bottom || 
        event.clientY<=bandContainer.getBoundingClientRect().top || 
        event.clientY>=backgroundMaxCircle.backgroundMaxCircle.getBoundingClientRect().top){
          return;
        }
      else{
      
        backgroundMinCircle.backgroundMinCircle.style.top=event.clientX-bandContainer.getBoundingClientRect().top-8+"px";
        backgroundMin.backgroundMin.style.height=event.clientX-bandContainer.getBoundingClientRect().top+2+"px";
        
        sumMin.sumMin.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().top)} ₽`;
      }
      if(event.clientX>=bandContainer.getBoundingClientRect().right || 
      event.clientX<=bandContainer.getBoundingClientRect().top ){
        return;
      }
    else{
      backgroundMaxCircle.backgroundMaxCircle.style.top=event.clientX-bandContainer.getBoundingClientRect().top-8+"px";
      backgroundMax.backgroundMax.style.height=event.target.getBoundingClientRect().top-bandContainer.getBoundingClientRect().top+2+"px";
    
      sumMax.sumMax.value=`${Math.trunc(event.clientX-bandContainer.getBoundingClientRect().top)} ₽`;
    } 
    }
  }
  ////////
  document.addEventListener("mouseup",function(event){
    backgroundMaxCircle.backgroundMaxCircle.removeEventListener('mousemove',setsMaxValue);
    backgroundMinCircle.backgroundMinCircle.removeEventListener('mousemove',setsMinValue);
  });
    });
  }
  })(jQuery);
  $(".js-range-slider").rangeSlider({oneRange:false});
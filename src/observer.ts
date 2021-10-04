interface Subject {
  subscribe(observer: Observer): void;

  unsubscribe(observer: Observer): void;

  broadcast(data: object) : void;
}

interface Observer {
  // Получить обновление от субъекта.
  (data: object): void;
}


export class ConcreteSubject implements Subject{
    
  public SumMin: number| string;
  public SumMax: number | string;
    
     private observers : Observer[] = []
     
    
    public  subscribe (observer: Observer)  {
       this.observers.push(observer)
      }
    
    public unsubscribe (observer: Observer) {
      
      this.observers = this.observers.filter((subscriber) => subscriber !== observer);
      }
    
      public  broadcast (data: object) {
        
        this.observers.forEach((observer) => observer(data))
        
      }
}

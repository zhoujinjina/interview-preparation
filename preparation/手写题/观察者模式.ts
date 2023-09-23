// 观察者接口  
interface Observer {  
    update(data: any);  
}  
  
// 具体观察者  
class ConcreteObserver implements Observer {  
    constructor(public name: string) {}  
  
    public update(data: any) {  
        console.log(`${this.name} received data: ${data}`);  
    }  
}  
  
// 被观察者接口  
interface Subject {  
    attach(observer: Observer);  
    detach(observer: Observer);  
    notify(data: any);  
}  
  
// 具体被观察者  
class ConcreteSubject implements Subject {  
    private observers: Observer[] = [];  
    private data: any;  
  
    public attach(observer: Observer) {  
        this.observers.push(observer);  
    }  
  
    public detach(observer: Observer) {  
        this.observers = this.observers.filter(obs => obs !== observer);  
    }  
  
    public notify(data: any) {  
        this.data = data;  
        this.observers.forEach(observer => observer.update(data));  
    }  
}  
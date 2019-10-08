import { Subject } from "./Subject";
import { Observer } from "./Observer";

export default class ConcreteSubject implements Subject {
    public state: number;

    private observers: Observer[] = [];

    attach(observer: Observer) {
        console.log('Attached an observer');
        this.observers.push(observer);
    }

    detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
        console.log('Detached an observer');
    }

    notify() {
        console.log('Notifying observers..')
        for(const observer of this.observers) {
            observer.update(this);
        }
    }

    businessLogic() {
        console.log('Doing something');
        this.state = Math.floor(Math.random() * (10 + 1))
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
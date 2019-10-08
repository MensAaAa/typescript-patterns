import { Observer } from "./Observer";
import { Subject } from "./Subject";
import ConcreteSubject from "./ConcreteSubject";

class ConcreteObserverA implements Observer {
    update(subject: any) {
        if (subject.state > 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: any): void {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.businessLogic();
subject.businessLogic();

subject.detach(observer1);

subject.businessLogic();
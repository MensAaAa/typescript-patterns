"use strict";
exports.__esModule = true;
var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        this.observers = [];
    }
    ConcreteSubject.prototype.attach = function (observer) {
        console.log('Attached an observer');
        this.observers.push(observer);
    };
    ConcreteSubject.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
        console.log('Detached an observer');
    };
    ConcreteSubject.prototype.notify = function () {
        console.log('Notifying observers..');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    ConcreteSubject.prototype.businessLogic = function () {
        console.log('Doing something');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log("Subject: My state has just changed to: " + this.state);
        this.notify();
    };
    return ConcreteSubject;
}());
exports["default"] = ConcreteSubject;

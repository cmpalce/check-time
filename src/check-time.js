export default class CheckTime {

  constructor() {
    this.date;
    this.isStop = false;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer); 
  }

  notifyAll() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].notify(this.date);
    }
  }

  start() {
    this.isStop = false;

    this.tick();
  }

  tick() {
    if (this.isStop) {
      this.date = undefined;
      return;
    }

    this.date = new Date();
    
    this.notifyAll();

    var timer = setTimeout(this.tick.bind(this), 1000);
  }

  stop() {
    this.isStop = true;
  }

}

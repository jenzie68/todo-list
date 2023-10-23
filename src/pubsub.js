class Pubsub {
    constructor() {
      this.tracker = {
        // key: eventname, value: [ funcs ]
      };
    }
  
    subscribe(eventName, func) {
      if (this.tracker[eventName]) {
        this.tracker[eventName].push(func);
      } else {
        this.tracker[eventName] = [func];
      }
      return {
        unsubscribe: () => {
          const funcs = this.tracker[eventName];
          const idx = funcs.indexOf(func);
          if (idx > -1) {
            funcs.splice(idx, 1);
          }
        }
      };
    }
  
    publish(eventName, ...args) {
      const funcs = this.tracker[eventName];
      if (Array.isArray(funcs)) {
        funcs.forEach((func) => {
          func.apply(null, args);
        });
      }
    }
  }

const pubsub = new Pubsub();

export { pubsub }
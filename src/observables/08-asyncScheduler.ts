import { asyncScheduler } from "rxjs";

// setTimeout(()=>{},1000)
// setInterval(()=>{},1000)

const sayHello = ({name}) => console.log(`hello ${name}`);

/**Creating a timeOut using asynScheduler */
// asyncScheduler.schedule(sayHello, 2000);
// asyncScheduler.schedule(sayHello, 3000, 'josue');
asyncScheduler.schedule(sayHello, 3000, {name: 'josue'});

/**Creating an interval using asynscheduler */
const myInterval = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule( state + 1 , 1000);
}, 3000, 0)

//stop interval subscription
asyncScheduler.schedule( () => myInterval.unsubscribe(), 9000);

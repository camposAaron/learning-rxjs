import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
}

const todayAt5 = new Date(); //ahora
todayAt5.setSeconds(todayAt5.getSeconds() + 5 );


//asincrono por naturaleza
const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer( todayAt5 );

console.log('inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');



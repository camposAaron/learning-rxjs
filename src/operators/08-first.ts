import { fromEvent, take, first, tap, map } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

// first emission of an observable that match for a condition or not;
click$.pipe(
    // map( event => ({
    //     clientY : event.clientY,
    //     clientX : event.clientX
    // }))
    map( ({ clientX, clientY })=> ({clientX, clientY })),
    first( event => event.clientY >= 150)
).subscribe({
    next : val => console.log('next: ',val),
    complete : () =>  console.log('complete')
});


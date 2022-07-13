import { fromEvent, range } from "rxjs";
import { map, pluck } from "rxjs/operators";

//map
// range(1,5).pipe(
//     map<number, number>( val => val * 10)
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);


keyup$.subscribe(console.log)
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( uri => console.log('pluck', uri));
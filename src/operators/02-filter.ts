import { from, fromEvent, range } from 'rxjs'
import { filter, map } from 'rxjs/operators'

// range(1,10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log)

range(20, 10).pipe(
    filter((val, i) => {
        // console.log('index ', i);
        return val % 2 === 1;
    })
).subscribe(console.log);

interface Character {
    type : String;
    name : String;
}

const characters: Character[] = [
    {
        type : 'hero',
        name: 'batman'
    },
    {
        type : 'hero',
        name: 'Robin'
    },
    {
        type : 'villane',
        name: 'Joker'
    }
]

const characters$ = from<Character[]>(characters).pipe(
    filter( chr => chr.type === 'villane')
);
characters$.subscribe(console.log);

const keyUpObs$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code), //KeyboardEvent , string
    filter(code => code === 'Enter')
);

keyUpObs$.subscribe(console.log);



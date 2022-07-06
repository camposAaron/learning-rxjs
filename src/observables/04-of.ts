import { of } from 'rxjs';

interface People {
    name: string,
    age: number
}

const people:People[] = [
    {name:'joshua', age: 21},
    {name:'Francis', age: 41},
    {name:'Alana', age: 7},
    {name:'Rachell', age: 21}
]

const obs$ = of<People[]>(...people);
// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of<any>([1,2],{a:1,b:2},true,Promise.resolve(true));

console.log('Inicio del obs$')
obs$.subscribe(
    next => console.log('next',next),
    null,
    () => console.log('sequence complete!!')
)
console.log('Fin del obs$')


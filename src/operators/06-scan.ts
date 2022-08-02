import { from, reduce, tap, map} from "rxjs";
import {  debounceTime, scan} from "rxjs/operators";

const numeros = [1,2,3,4,5]

// const totalAcumulador => ( acc, cur) => {
//     return acc + cur
// }

const totalAcumulador = ( acc:number, cur:number) =>  acc + cur;

//reduce
from(numeros)
.pipe(
    reduce(totalAcumulador, 0),

)
.subscribe(console.log)


//Scan
from(numeros)
.pipe(
    scan(totalAcumulador, 0),
)
.subscribe(console.log)

//Redux

interface  Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string,
    edad?: number
}

const user:  Usuario[] =[
    {id: 'joshua' , autenticado: false, token:null},
    {id: 'joshua' , autenticado: true, token:'ABC'},
    {id: 'joshua' , autenticado: true, token:'ABC123'},
]

const state$ = from( user ).pipe(
    scan<Usuario>( (acc:Usuario, cur: Usuario) => {
        return { ...acc, ...cur }
    })
);

const id$ = state$.pipe(
    map( state => state.id)
);

id$.subscribe(console.log)
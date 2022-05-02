import { Observable } from "rxjs";

// const obs$ = Observable.create()
const obs$ = new Observable( subs => {

    subs.next('hola');
    subs.next('mundo');
    subs.next('desde');
    subs.next('marte');
    //forzar un error
    // const algo = undefined;
    // algo.name = 'xd';

    subs.complete()



    subs.next('hola');
    subs.next('mundo');
    subs.next('desde');
    subs.next('marte');
});


//PRIMERA FORMA
// obs$.subscribe( resp => {
//     console.log(resp);
// });

//SEGUNDA FORMA
// obs$.subscribe({
//     next :(val) => console.log('next: '+val),
//     error: (err:any) => console.warn('error: ',err),
//     complete : () => console.info('Completado')
// });



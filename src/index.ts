import { Observable } from 'rxjs';


// const obs$ = Observable.create()

const obs$ = new Observable( subs => {

    subs.next('hola');
    subs.next('mundo');
    subs.next('desde');
    subs.next('marte');

    subs.complete()
    
    
    subs.next('hola');
    subs.next('mundo');
    subs.next('desde');
    subs.next('marte');
});


obs$.subscribe( console.log );













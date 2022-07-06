import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: (value) => console.log('next:', value),
    error: (error) => console.warn('error:', error),
    complete: () => console.info('completado')
}

//cold observable
const intervalo$ =  new Observable<number>( subs => {

    const intervalID = setInterval(
        () => subs.next( Math.random() ), 1000
    );

    return () => {
        clearInterval(intervalID)
        console.log('intervalo destruido')
    };
});

/**
 * 1-multiple casting
 * 2-it's an observable too
 * 3-next, error and complete
 */
const subject$ = new Subject<number>();
const intervalSubscription =  intervalo$.subscribe( subject$ );

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );

setTimeout( ()=> {
    subject$.next(10);
    subject$.complete();
    intervalSubscription.unsubscribe();
},3500)





import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completador [obs]')
}

const intervalos$ = new Observable<number>(subs => {

    let contador: number = 1;

    const interval = setInterval(() => {
        subs.next(contador++);

        //    if(contador === 10)
        //     subs.complete()
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('intervalo terminado');
    }

});

// const subscription = intervalos$.subscribe({
//     next: (value: number) => console.log(value),
//     complete: () => console.info('El contador ha sido completado')
// });

const subs1 = intervalos$.subscribe(val => console.log(val))
const subs2 = intervalos$.subscribe(val => console.log(val))
const subs3 = intervalos$.subscribe(val => console.log(val))

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
    console.log('completado timeout');
},3500)













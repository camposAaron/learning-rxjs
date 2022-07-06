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
    }, 1000);

    setTimeout(()=>{
        subs.complete();
    },4000)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }

});

// const subscription = intervalos$.subscribe({
//     next: (value: number) => console.log(value),
//     complete: () => console.info('El contador ha sido completado')
// });

const subs1 = intervalos$.subscribe(observer);
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);

subs1.add(subs2)
subs2.add(subs3)


setTimeout(() => {
    subs1.unsubscribe();
    console.log('completado timeout');
},6000);


//limitar cantidad de emisiones de un observable

import { of, range, take, tap } from "rxjs";

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    tap(t => console.log('tap ',t)),
    take(3)
).subscribe({
    next : value => console.log(value),
    complete : () => console.log('complete'),
});
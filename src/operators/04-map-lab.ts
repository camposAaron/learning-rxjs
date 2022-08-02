import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum augue et nunc semper, non convallis ex dapibus. Integer placerat ut purus non convallis. Mauris purus ex, ornare ac magna quis, bibendum ultricies turpis. Nam malesuada mi a odio euismod, finibus ornare dolor euismod. Duis porttitor dolor odio, non placerat erat gravida at. Nunc mattis magna metus, vel auctor nisl ultrices eget. Nullam sed consectetur sem. Aliquam ac tempor dolor. Donec vitae rhoncus ex, a pharetra ante. Duis venenatis nec lacus et hendrerit. Nunc nisi tellus, pulvinar ornare viverra eget, dictum rutrum massa. Nam ornare vel velit eget venenatis. Sed porttitor rutrum tortor, rutrum vulputate lectus. Sed fringilla orci a eros cursus placerat. In scelerisque volutpat augue, laoreet scelerisque enim lacinia pellentesque. Nullam at leo id elit commodo suscipit.

Sed quis laoreet arcu. Mauris eget nunc fermentum, rhoncus lectus a, fermentum sapien. Nunc lacinia tempus orci, eu tempus sapien molestie et. Proin hendrerit diam mi, eget venenatis augue faucibus hendrerit. Nulla facilisi. Mauris molestie auctor elit sit amet lacinia. Sed dictum ipsum at tortor volutpat, a dictum arcu congue. Suspendisse eu accumsan sapien. Etiam dictum in orci nec pulvinar. Nulla facilisi. Cras ultrices egestas elit, at sodales erat. Nunc et suscipit enim, at accumsan ex. Praesent maximus arcu nec lacinia interdum. Donec laoreet, eros nec consequat rutrum, erat felis efficitur odio, et consequat felis arcu in metus. Maecenas congue risus eu ligula volutpat convallis.

Duis at purus ac nulla faucibus lobortis in in tortor. Ut sodales bibendum arcu, ut sollicitudin nunc molestie fringilla. Duis fringilla orci et nisi euismod, ac commodo magna efficitur. Aenean elementum imperdiet iaculis. Morbi suscipit lobortis felis eu gravida. Quisque lacinia euismod erat sit amet congue. In suscipit magna quis ornare pretium. Nunc nec dignissim sem. Aliquam sit amet iaculis felis. Integer elit diam, suscipit nec interdum a, posuere ut ligula. Cras id elit id ante consectetur pellentesque in id est.

Donec luctus metus nisl, quis ullamcorper lacus tincidunt vel. Mauris tincidunt non quam vel sollicitudin. Proin sit amet leo at magna mollis cursus. In condimentum libero ut sapien posuere imperdiet. Phasellus commodo libero ut felis rhoncus tincidunt. Maecenas pulvinar augue ac ipsum imperdiet, eleifend accumsan nisi molestie. Mauris facilisis magna nec dictum volutpat. Pellentesque massa massa, hendrerit et malesuada at, suscipit sed ante. Integer tincidunt fringilla vestibulum. Maecenas rutrum luctus finibus. Aliquam erat volutpat. Nulla condimentum, arcu sed molestie ultricies, ipsum ipsum bibendum turpis, vitae suscipit dui ex eu mauris.

Nunc non ante ex. Integer non magna nec quam egestas finibus. Cras nec ex molestie, faucibus dui id, pretium enim. Etiam euismod, velit sed tincidunt tempor, dui purus sagittis ligula, quis tincidunt nisl nisi condimentum metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed tortor neque. Ut eget aliquet nunc, a vulputate nisi. Donec et luctus leo, et posuere elit. Praesent sed magna in leo viverra vestibulum eget quis arcu.

Phasellus iaculis faucibus sem pellentesque ullamcorper. Maecenas convallis porta augue eget viverra. Mauris non ornare quam. Praesent sem orci, finibus vel ligula a, convallis aliquet tortor. Ut cursus ligula dolor, eu mattis dui efficitur eget. Phasellus sit amet magna non dui feugiat interdum. Vivamus hendrerit tincidunt ipsum, non lacinia ante vestibulum a. Fusce tempus nulla augue, a aliquam lacus posuere sit amet. Vestibulum semper ultricies aliquet. Vivamus nibh arcu, tristique id velit ut, mattis tristique massa.

Morbi mauris neque, tristique eget tempus eu, rutrum id ante. Curabitur volutpat auctor magna, nec ullamcorper mi porttitor eu. Proin volutpat ante tortor, sit amet elementum orci feugiat at. Sed condimentum lacinia ipsum, non volutpat velit faucibus viverra. Pellentesque ut mi velit. Curabitur hendrerit mattis ex vitae placerat. Nullam sed tristique velit. Donec varius, ligula in tristique vulputate, justo diam finibus leo, vitae egestas est mi in augue. Aliquam non magna pretium est porta iaculis sed eu nibh. Suspendisse non tempus elit.

Etiam ante enim, elementum ut sapien porttitor, commodo convallis nibh. Aenean ut neque in justo dictum venenatis. Fusce vel massa eros. Morbi pharetra at nisi eget ornare. Suspendisse dictum porttitor nisi, eu efficitur diam blandit eget. Ut pulvinar commodo mauris vel efficitur. Nullam in velit et metus vehicula posuere nec eleifend eros. Sed mollis magna leo, pellentesque sagittis libero dapibus id. Nulla posuere, diam et volutpat suscipit, ante ipsum scelerisque leo, nec tincidunt mauris ipsum quis risus. Vivamus lorem ex, mattis id velit ut, pretium varius est. Sed volutpat, risus et sagittis tincidunt, tellus diam euismod nunc, in efficitur magna elit vitae ligula.

Duis in dui vitae lacus elementum auctor eu ac metus. Nam aliquam convallis nulla sed tristique. Aliquam feugiat semper ultricies. Suspendisse auctor, tellus scelerisque hendrerit vestibulum, dolor libero venenatis tellus, eu venenatis turpis neque vel neque. Aenean neque nisl, consequat ultrices tempus ultrices, rutrum quis ipsum. Curabitur nec dolor odio. Donec ultricies vehicula lacus, id feugiat ex gravida sed. Integer tempor ultricies libero, vitae congue ex. Etiam non rhoncus urna. Quisque imperdiet, augue eu tempus eleifend, risus magna laoreet nisl, condimentum tincidunt velit ligula ac nibh. Ut eu tincidunt odio. Duis efficitur quis augue condimentum luctus. Sed bibendum ornare hendrerit.

Etiam sed mattis dui. Pellentesque a neque vitae ante aliquam lobortis vitae quis dolor. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum mollis elementum. Mauris tincidunt, nibh quis bibendum ultrices, libero arcu dictum lorem, vitae congue lacus nulla eu mi. Vivamus sit amet augue at ipsum ornare malesuada. Praesent eros risus, euismod et neque sit amet, pretium blandit enim. Aenean in bibendum neque, vel consequat eros. Donec sit amet ultricies odio. Sed laoreet convallis mauris eget efficitur. Vestibulum posuere eros nec lectus facilisis aliquam. Praesent magna justo, interdum sed dignissim vitae, gravida ut urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis faucibus massa.
`

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar);


//funcion que haga el calcula
const calcScrollProgress = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progres$ = scroll$.pipe(
    map( calcScrollProgress ),
    tap( console.log )
);

progres$.subscribe(percent => {
    progressBar.style.width = `${percent}%`
});
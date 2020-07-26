const { of } = require('rxjs');
const { map, pluck } = require('rxjs/operators');

of({ prop: 10 })
    .pipe(
        // map((value) => value.prop),
        pluck('prop')
    ).subscribe((val) => console.log(val));
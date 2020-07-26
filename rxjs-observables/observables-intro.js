function observe(observable, next, error, complete) {
    try {
        for (const value of observable) {
            if(Math.random() >= .5) {
                throw new Error('Whoops!');
            }
            next(value);
        }
    } catch(err) {
        error(err);
    } finally {
        complete();
    }
}

observe('Observable', (value) => {
    console.log('next: ', value);
}, (error) => {
    console.log('error: ', error);
}, () => {
    console.log('complete');
});
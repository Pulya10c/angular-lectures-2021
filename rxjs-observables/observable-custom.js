class Observable {
    constructor(source) {
        this.source = [...source];
    }

    subscribe(next, error, complete) {
        try {
            for (const value of this.source) {
                // if(Math.random() >= .5) {
                //     throw new Error('Whoops!');
                // }
                next(value);
            }
        } catch(err) {
            error(err);
        } finally {
            complete();
        }
    }

    filter(predicate) {
        this.source = this.source.filter(predicate);
        return this;
    }

    map(callback) {
        this.source = this.source.map(callback);
        return this;
    }
}

new Observable('Observable')
    .map((value) => value.toUpperCase())
    .filter((value) => value > 'H')
    .subscribe((value) => {
        console.log('next: ', value);
    }, (error) => {
        console.log('error: ', error);
    }, () => {
        console.log('complete');
    })
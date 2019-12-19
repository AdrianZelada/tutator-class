// Make two observable functions
// a. First function return first 5 numbers of
// fibonacci series
// b. Second function determine if a number is
// capicua
// after that call these observable functions only with
// one subscribe and show the results in “console.log”; you
// should use Rxjs operators in order to solve it (a plus if you
// can cancel this subscription)

const rxjs = require('rxjs');

const fibo = () => {
    let a = -1;
    let b = 1;
    let c = 0;
    let index = 0;

    return new rxjs.Observable((observer) => {
        const interval = setInterval( () => {
            c = a + b;
            a = b;
            b = c;
            index++;
            observer.next(c);
            if ( index == 5 ){
                observer.complete();
                clearInterval(interval);
            }
        }, 100)       
    });
}

const capicua = (num)=> {
    return new rxjs.Observable((observer) => {
        let numBase = num.toString();
        numBase = numBase.split('');
        const rev = numBase.reverse().join('');
        observer.next(rev == num);
        observer.complete();
    })
    
}

rxjs.combineLatest([fibo(), capicua(222)]).subscribe((response) => {
    console.log("response");
    console.log(response);
});
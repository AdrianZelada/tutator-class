// Declare an observable functino that receive one string paramter an separate into an object the Vocales and the consonantes and Convert to promise
const rxjs = require('rxjs');
const vocales = ['a', 'e', 'i', 'o', 'u'];

const getCountLetters = (text) => {

    return new rxjs.Observable((observer) => {
        const v =  [];
        const c = [];
        text = text.split('');
        console.log(text)
        text.forEach(element => {
            element = element.toLowerCase()
            if (vocales.indexOf(element) != -1) {
                v.push(element)
            } else {
                if(isNaN(element)) {
                    c.push(element)
                }
            }
        });
        
        observer.next({
            vocales: v,
            consonants: c
        })
        observer.complete()
    })
}


getCountLetters("adsfqweqwasdas").toPromise().then((result) => {
    console.log(result);    
})
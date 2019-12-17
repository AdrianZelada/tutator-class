
const moment = require("moment");
const generoEdad = require("./exercise-3.js");
const ppls = generoEdad();

// 4.-  Dado el resultado del ejercicio 3, obtener todos los ppls que tenga una edad y que sean Bolivianos
const edad = 49;
const result = [];
Object.keys(ppls).forEach((key) => {
    if(ppls[key][edad]) {
        ppls[key][edad].forEach((item) => {
            if(item.nacionalidad_boliviana == 'SI') {
                result.push(item);
            }
        });
    }
})
console.log(result);

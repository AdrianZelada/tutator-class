
const ppls = require("./ppls.json");

// 1./ Agrupar Ppls por el idioma primario.

let idiomas = {};

idiomas = ppls.reduce((result, item) => {
    if(item.idioma_primario){
        result[item.idioma_primario] = result[item.idioma_primario] ? [item, ...result[item.idioma_primario]] : [item];
    } else {
        result['sinIdioma'] = result['sinIdioma'] ? [item, ...result['sinIdioma']] : [item];
    }
    
    return result;
});

console.log(idiomas)

const ppls = require("./ppls.json");

// 2./ filtra los ppls que sean extranjeros y que esten en el recinto 11.

let result = ppls.filter((data) => {
    return (data.documento_expedido === 'EXTRANJERO' && data.recinto_id == '11') 
})

console.log(result.length)
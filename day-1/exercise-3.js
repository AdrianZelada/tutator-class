
const ppls = require("./ppls.json");
const moment = require("moment");
// 3./ Agrupar por Genero y en el genero agrupar por edad.
function generoEdad() {
    let res = ppls.reduce((result, data) => {
        if (data.sexo) {
            result[data.sexo] = result[data.sexo] ? [data, ...result[data.sexo]] : [data]
        }
        return result;
    }, {});

    Object.keys(res).forEach((key)=> {
        res[key] = res[key].reduce((r, item) => {
            if (item.fecha_nacimiento) {
                const year = moment().diff(item.fecha_nacimiento, 'years', false);
                r[year] = r[year] ? [item, ...r[year]] : [item];
            }
            return r
        }, {})
    });
    // console.log(res)
    return res;
}

module.exports = generoEdad;

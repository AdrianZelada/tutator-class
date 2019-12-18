// 2.- Create three chained async functions that shows in a console log the first name in the function
// the age with moment Js in the second function and the ful name in the third call (Promise.all)
const moment = require("moment");

function timerload( time){
    return (text) => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(text);
            }, time)
        })
    }
}
const getText = timerload(500);

const asynFoo = async (data) => {
    try {
        const name = await getText(data.name);
        console.log(name)
        const lastName = await getText(data.lastName);
        console.log(lastName)
        const edad = await getText(moment().diff(data.birthday, 'years', false));
        console.log(edad)
        return {
            fullname: `${name} ${lastName}`,
            edad: edad
        }
    } catch(e) {

    }  
}

asynFoo({
    name: 'Adrian',
    lastName: 'Zelada',
    birthday: '1989-03-16'
}).then((data) => {
    console.log(data)
});
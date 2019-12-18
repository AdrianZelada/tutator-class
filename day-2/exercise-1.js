// 1.- Create an async function that has an input of a delay and two values that 
//changes the delay value (like a+b *Math.pow(c)) and shows a console.log of that response


function operation(a, b, t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b+t)
        }, t);
    })
}

const result = operation(10, 10, 1000).then((res) => {
    console.log(res)
})

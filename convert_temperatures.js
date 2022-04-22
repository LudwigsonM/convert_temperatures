function fToC(temp){
    const Cel = (temp - 32) * 5 / 9;
    const message = `${temp} Fahernheit is ${Cel} Celsius`;
    return(message);
}

const F = 100
console.log(fToC(F))

function CtoF(temp1){
    const Fah = (temp1 * 9) / 5 + 32
    const message = `${temp1} Celsius equals to ${Fah} Fahernheit`
    return (message)
}
const C = 0
console.log(CtoF(0))

function cToK(temp2){
    const Kel = (temp2 + 273.15)
    const message = `${temp2} Celsius equals to ${Kel} Kelvin`
    return (message)
}
const K = 75
console.log(cToK(75))
const {fruta,dinero} = require('./frutas');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

fruta.forEach(item => {
    console.log(item) // .count -> cuenta los valores repetidos
})

console.log(dinero)

console.log('Hola mundo')
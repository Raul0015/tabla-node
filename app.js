const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
// Desestructuracion de la bandera para la base
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(process.argv);

// console.log('base: yargs', argv.b);
// const base = 10;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err));
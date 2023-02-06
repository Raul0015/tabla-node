const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicación'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta donde se multiplica'
                })
                .check((argv, options) => {
                    if (isNaN(argv.h)){
                        throw 'El limite debe ser un numero'
                    }
                    return true
                })
                .argv;

module.exports = argv;
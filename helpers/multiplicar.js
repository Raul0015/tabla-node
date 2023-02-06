const fs = require('fs');
const colors = require('colors');

// const multiplicar = (base = 5) => {
//     const multiplicar = new Promise ( (resolve, reject) => {
//         console.log('=============');
//         console.log(`Tabla del ${base}`);
//         console.log('=============');
//         // Vamos a grabar en una archivi lo que arroja la tabla
//         let salida = '';
//         let top = 10;

//         for (var i = 1; i <= top; i++){
//             salida += `${base} * ${i} = ${base * i}\n`;
//         }

//         if (salida){
//             console.log(salida)
//             // Para hace el nombre del archivo dinamico, usamos ``
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             resolve(salida)
//         }
//         else{
//             reject(`No se pudo realizar la multiplicación!!`);
//         }
//     });

//     return multiplicar;
    
// }


// const crearArchivo = async(base = 5) => {

//     try{
//         const tabla = await multiplicar(base)
//         return `Se creo la tabla del ${base}`
//         //console.log(`tabla-${base}.txt creada`);
//     }catch (error) {
//         throw (error);
//     }

// }

// Otra manera de hacerla 
const crearArchivo = async(base = 5, listar = false, top = 10) => {
    try{
        
        // Vamos a grabar en una archivi lo que arroja la tabla
        let salida = '';
        let consola = '';

        for (let i = 1; i <= top; i++){
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${'*'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar){
            console.log('============='.green);
            console.log(`Tabla del ${base}`.underline.green);
            console.log('============='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`
    } catch (err) {
        throw err;
    }
    
}



// Para exportar
module.exports = {
    crearArchivo
}
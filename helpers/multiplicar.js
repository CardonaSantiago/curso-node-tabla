const fs = require('fs');
const color =  require('colors');


//con promesas
/*
const crearArchivoTabla = ( base = 5 )=>{
    return new Promise((resolve,reject)=>{
        console.log('==========================');
        console.log(`       TABLA DEL ${base}         `);
        console.log('==========================');

        let salida = '';
        for (let index = 1; index < 11; index++){
            salida += `${base} x ${index} = ${base*index}\n` ;  
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`,salida);

        resolve(`tabla-${base}.txt creado`);
    })
    
}
*/
//con async-await
const crearArchivoTabla = async( base = 5, listar = false , hasta=10)=>{

    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++){
            salida += `${base} x ${index} = ${base*index}\n` ; 
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base*index}\n` ;   
        }
        if(listar){
            console.log('==========================');
            console.log(`       TABLA DEL ${base}         `.green);
            console.log(color.inverse('=========================='));
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt creado`.rainbow    
    } catch (error) {
        throw error
    }
    
}


module.exports = {
    crearArchivoTabla
}
const fs = require('fs');

const copiar = (archivoEntrada, archivoSalida) => {
    fs.readFile(archivoEntrada, 'utf8', (error, datos) => {
        fs.writeFile(archivoSalida, datos, () => {});
    });
}

module.exports=copiar;
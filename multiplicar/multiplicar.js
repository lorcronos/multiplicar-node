const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} es un número`);
            return;
        }

        let data = '==========================\n'.green;
        data += ` Tabla de ${base} \n`.green;
        data += '==========================\n'.green;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} es un número`);
            return;
        }

        let data = '==========================\n';
        data += ` Tabla de ${base} \n`;
        data += '==========================\n';

        let nameFile = `tabla-${ base }-al-${ limite }.txt`

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/${ nameFile }`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nameFile);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
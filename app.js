const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(datos => console.log(datos))
            .catch(e => console.log(e));
        break;

    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}
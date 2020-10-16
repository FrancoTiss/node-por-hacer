const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado()

        if (listado.length > 0) {

            for (const i of listado) {

                console.log('======= Por Hacer ======='.green);
                console.log('Descripción: ', i.descripcion);
                console.log('Estado: ', i.completado);
                console.log('========================='.green);

            };

        } else
            console.log('No se registran tareas por hacer');

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado)
            console.log('Tarea actualizada correctamente!');
        else
            console.log('No se encontró la tarea especificada');

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado)
            console.log('La tarea fue eliminada correctamente!');
        else
            console.log('No se encontró la tarea especificada');

        break;

    default:
        console.log('El comando no es reconocido');

}
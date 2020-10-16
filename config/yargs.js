opt = {

    descripcion: {
        demand: true,
        alias: 'd'
    },

    completado: {
        alias: 'c',
        default: true
    }

};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opt)
    .command('actualizar', 'Actualizar una tarea por hacer', opt)
    .command('listar', 'Lista las tareas realizadas y por hacer', opt)
    .command('borrar', 'Elimina una tarea de la lista', opt)
    .help()
    .argv;

module.exports = {
    argv
}
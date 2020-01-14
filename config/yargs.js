const argv = require('yargs')
        .command('crear','Crear un elemento por hacer',{
            descripcion:{
                desc: 'Descripcion de la tarea por hacer',
                alias:'d',
                demand:true,
            }
        })
        .command('listar','Muestra las tareas por hacer',{
            listar:{
                alias:'l'
            }
        })
        .command('actualizar','Actualiza el estado completado de una tarea',{
            completado:{
                alias:'c',
                default:true,
                desc: 'Marca como completada o pendiente la tarea'
            },
            descripcion:{
                alias:'d'
            }
        })
        .command('borrar','Borra una tarea',{
            borrar:{
                alias:'b',
                desc: 'Elimina una tarea por medio de su descripción'
            },
            descripcion:{
                alias:'d'
            }
         })
        .help()
        .argv;

module.exports = {
    argv
}
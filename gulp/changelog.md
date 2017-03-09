


@Pendientes
- Añadir array para pageres
- Añadir funcionalidad de dividir responsive para proyectos grandes con IE9
- Añadir herencia en sass


@4.0 - 08/10/2016 - Edu Iglesias Hernández. 
- Corregido problema de bulce infinito cuando solo se trabaja con con archivos JS. 
- Cambio de estructura de trabajo para los archivos JS 
- Correccion de las tareas de gulp para compilar y generar la carpetas min y normal. 


@4.0 - 28/07/2016 - Abel Cabeza Román
- Compatibilidad con la nueva estructura
- Mejoras
- Agregados nuevas configuraciones para tareas.
- Agregados nuevos plugins y tareas
- Agregada compatibilidad con el desarrollo en typescript



¡¡¡¡¡¡     IMPORTANTE     !!!!!!

 LA VERSION 4 ES INCOMPATIBLE CON LAS ANTERIORES VERSIONES. SOLO UTILIZAR LA VERSION 4 PARA NUEVOS PROYECTOS. EL CAMBIO DE UN PROYECTO CON UNA ESTRUCTURA
YA DEFINIDA SERIA DEMASIADO TEDIOSO.

¡¡¡¡¡¡     IMPORTANTE     !!!!!!





@3.6 22/07/2016 - Abel Cabeza Román

- Agregadas carpetas de configuracion de tareas y validation
- Agregado plugin scss-lint para validar scss y su respectiva tarea (Instalar gem install scss_lint para poder utilizar)
- Agregado plugin cssLint para validar css y su respectiva tarea
- Agregado plugin htmlHint para validar html y su respectiva tarea
- Fixs
- Eliminar mapeo cuando genere dist

@ 3.5 - 01/07/2016 - Abel Cabeza Román
- Agregado plugin "combine-mq" que mergea media queries duplicadas
- Editada tarea build css para que utilice el plugin "combine-mq"
- Agregado plugin "gulp-flatten" que elimina rutas relativas mantenidas por defecto por gulp
- Editado tarea jade para que, aunque tengamos una estructura de carpeta en jade, los templates los escupa todos en el index

@ 3.35 - 27/06/2016 - Abel Cabeza Román
- Agregados algunos comentarios
- Agregado modulo gulp-connect y su respectiva tarea dentro del archivo
- Reducido el numero de variables redundantes de config.js
-

@ 3.31 - 24/06/2016 - Abel Cabeza Román
- Cambiado el nombre de la tarea "upCloud" a "move" ya que ahora esta tarea servirá para mover un archivo a cualquier directorio, no solo para actualizar un archivo de la nube

@ 3.3 - 23/06/2016 - Abel Cabeza Román
- Agregado modulo gulp-replace
- Agregada funcion replacetext para reemplazar textos
- Editada tarea upCloud para que además de actualizar un fichero en una ruta, se pueda sustituir algún texto del archivo

@ 3.25 - 15/06/2016 - Abel Cabeza Román
- Agregado plugin node-notifier para que muestre mensajes de windows cuando la consola da un error. Util si no llevas los cascos puestos :)

@ 3.23 - 15/06/2016 - Abel Cabeza Román
- Optimizacion de mensaje de error. Ya no muestra mensajes redundantes

@ 3.22 - 09/06/2016 - Abel Cabeza Román
- Agregada tarea cleanMin.js para eliminar el contenido de dist antes de generar la version distribuida y asi evitar posibles conflictos

@ 3.21 - 08/06/2016 - Abel Cabeza Román
- Agregada tarea para actualizar archivo css en la nube, esta tarea no valdrá para todos los proyectos pero es muy útil cuando aplica

@ 3.2 - 08/06/2016 - Abel Cabeza Román
- Agregado archivo functions para implementar cualquier funcion necesaria para gulp
- Arreglado bug de la modularizacion de gulp que paraba el server cada vez que ocurria un error
- Cambiado color de consola para que sea menos estridente

@ 3.1 - 07/06/2016 - Abel Cabeza Román
- Optimización tarea scss.js

@ 3.0 - 06/06/2016 - Abel Cabeza Román
- Modularizacion de gulp

@ 2.20 - 29/05/2016 - Abel Cabeza Román
- Agregada Tarea "initSetWatch" que cachea los jades para evitar que se
compilen todos la primera vez que se guarda un jade.
- Comentado todo lo relacionado con global.isWatching y setWatch por no agregar
 funcionalidad. Si veis algun bug que pueda ser debido a ello, comentarlo. En las
 siguientes versiones, si no da problemas será completamente eliminado.

@ Version 2.15 - 20/05/2016 - Abel Cabeza Román
- Agregados comentarios


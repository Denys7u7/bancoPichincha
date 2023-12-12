# BancoPichincha

Para correr el proyecto debemos correr el comando `ng serve` ó `npm start`, la aplicación se abrira el `http://localhost:4200/`, si por alguna razon tienes en uso el puerto 4200, puedes usar el comando `ng serve --port {puerto}` y deberas de acceder a `http://localhost:{puerto}`.

Para la ejecucion de pruebas unitarias, puedes correr el comando `ng test`. Si deseas obtener el reporte de cobertura, puedes usar el comando `ng test --code-coverage`

NOTAS:

- Si por alguna razon quieres recargar los productos sin recargar la pagina, puedes dar `enter` en la caja de busqueda cuando esta se encuentre vacia, esta accion realiza una peticion al endpoint que obtiene los productos

- Todas las peticiones tienen un delay de 200ms para poder apreciar el `skeleton`

- Puedes apreciar el reporte de la cobertura de una manera mas detallada, para eso debes ubicarte en la carpeta `coverage/banco-pichincha` y luego acceder al archivo `index.html`. (Luego de correr el comando `ng test --code-coverage`)

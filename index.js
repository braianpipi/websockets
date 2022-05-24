// >>Consigna 1: Modificar el ultimo entregable para que disponga de un canal de websocket
// que permita representar, por debajo del formulario de ingreso, una tabal con la lista 
// de productos en tiempo real. 
//     - Puede haber varios clientes conectados simultaneamente y en cada uno de ellos 
//     se reflejaran los cambios que se realicen en los productos sin necesidad de
//     recargar la vista. 
//     -Cuando un cliente se conecte , recibira la lista de productos a representar 
//     en la vista.

//     >> Aspectos a incluir en el entregable:
//     Para construir la tabala dinamica con los datos recibidos por el websocket utilizar
//     Handlebars en el frontend. Considera usar archivos publicos para alojar la plantilla
//     vacia, y obtenerla usando la funcion fetch(). Recordar que fetch devuelve una promesa .

//     >>Consigna 2: Añadiremos al proyecto un canal de chat entre los clientes y 
//     el servidor. 
    
//     >>Aspectos a incluir en el entregable :
//         -En la parte inferior del formulario de ingrese se presentara el centro de
//         mesajes almacenados en el servidor, donde figuren los mensajes de todos los
//         usuarios identificados por su email . 
//         -El formato a representar será: email (texto negrita azul)[fecha y hora (DD/MM/YYYY
//         HH:MM:SS)](texto normal en marron ) : mensaje(texto italic en verde )
//         - Ademas incorporar dos elementos de entrada: uno para que el usuario ingrese
//         su email (obligatorio para poder utilizar el chat ) y otro para ingresar mensajes y
//         enviarlos de mediante un boton. 
//         -Los mensajes deben persistir en el servidor en un archivo (ver segundo entregable)
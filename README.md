# MTZsupport
 
- la dirección de hosting es [MTZSupport](https://mtzsupport.000webhostapp.com)
- El repositorio de github es [MTZSuppot](https://github.com/jslipak/jslipak.github.io)
- la pagina web de github es [MTZsupport](https://jslipak.github.io/)

## Curso Javascript
- La idea es hacer que ante el evento de cualquier botón mas información de la pagino despliegue un modal y en este modal va a aparecen un formulario con varios campos:
  - Nombre y apellido: La misma podría ser revisado con algún criterio
  - Dirección del potencial cliente: en este campo la idea es que lo matchee que este en determinada zona y dependiendo de la zona le asigne un horario. Respecto del horario va hacer una consulta algún tipo de base de dato a definir para ver la posible opción
  - E-mail: el mismo va ser validado con una expresión regular , aunque seria un doble control ya que en el html con el tipo de input quedaría probado.
  - Teléfono: El cual va ser validado con alguna expresión regular
  - un botón Submit:
### Posibles escenarios
1. si el formulario esta correcto:  le va dar al cliente un posible día y fecha que va ser confirmado en las próximas 24hs., va generar algún archivo json que va ser mandado a la base de datos:
  - Va generar algún contacto activo con migo ya sea por un whatsapp , telegram o email(el desafió acá va ser buscar alguna solución para no dejar vulnerable la api-key de alguno de los servicios que tengo que usar, probablemente lo resuelva desde alguno de estos servicios)
2. si el formulario es incorrecto hay 2 opciones:
  - Que alguno de los datos este incorrecto y que lo vuelva al formulario hasta que el mismo este correcto o lo cancele.
  - El caso que la  dirección este fuera del área de servicios: 
    1. Le va mandar un mensaje que lo sentimos pero no vamos a poder brindar el servicio
    2. Luego Va generar algún contacto activo con migo ya sea por un whatsapp , telegram o email. Así de esta forma voy a saber los datos o en el caso que me quiercomunicar con el potencial cliente y además llevar un estadística.

### Tareas a realizar 
- [  ] crear modal: 
  - [  ] Nombre y apellido.
  - [  ] email.
  - [  ] teléfono.
  - [  ] dirección.
- [  ] cambiar los botones de mtzsupport para el modal.
- [  ] insertar el javascript para que el modal ante el evento click se active el modal.
- [  ] Hacer función para checkear el teléfono.
- [  ] Hacer función para checkear el email.
- [  ] Dirección.
  - [  ] Crear zonas , asignarles día y horarios.
  - [  ] Hacer que revise que la dirección que pone este dentro de las zonas de cobertura
  - [  ] cuando ponen la dirección que despliegue un mapa con la ubicación para confirmar



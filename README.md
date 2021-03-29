# DemoRemitee
Demo solicitada por Remitee, para entrevista laboral


# Requerimientos

Desarrollar una API de cotizaciones en .net core, que resuelva el siguiente problema.

a) Calcular el monto X a enviar en moneda M para que llegue el monto Y en moneda N.
b) Calcular el monto Y a recibir en moneda N enviando el monto X en moneda M.

Ej: ¿Si quiero que lleguen 100 BOB cuantos ARS debo enviar?
Ej: ¿Si envió 10.000 ARS cuántos BOB llegarían?.

Consideraciones.
-En el cálculo se debe tener en cuenta el fee que es un % del monto enviado.
-En el cálculo se debe tener en cuenta el tipo de cambio almacenado en la base de datos.
-Los tipos de cambio se deben actualizar mediante una background task a consumiendo https://currencylayer.com
-Para el acceso a datos utilizar entity framework code first
-Compartir el código mediante algún repositorio

Se requiere una UI, en Angular o en lo que vos quieras, que consuma esa API que vas a desarrollar.

Para instalar:

Usar VS CODE
abrir la carpeta remitee-api
correr el proyecto con F5

En otra ventana de VS CODE

abrir la carpeta remitee-ui
en la terminal:

npm install
npm start

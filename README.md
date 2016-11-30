# clase03-angular-4r

Para ejecutar el servicio que tiene un API Rest, necesitan tener instalado JSON Server 
La instalación se realiza con 
```javascript
npm install -g json-server
```
Para ver ejemplos de JSON Server ir a  https://github.com/typicode/json-server#example

Para iniciar json-server configurar el puerto, y si estamos parados en el directorio raiz del proyecto configurar la ubicación del archivo de datos json relativo a este path
```javascript
json-server -p <puerto> data\json.db
```
(en el ejemplo de codigo el puerto es 4999, si lo cambia, cambiar en el factory rest, el valor de URL configurado con un value).

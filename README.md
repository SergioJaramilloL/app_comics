# ComicApp
Este proyecto consume el API de xkcd: https://xkcd.com/json.html mostrando aleatoriamente un comic y dando la oportunidad al usuario de interactuar con cada uno de los comics. 

## Requisitos
Para este proyecto necesitas tener instalado lo siguiente:

* Node.js
* Usar el proxy_comics_xkcd que esta en el siguiente repositorio: https://github.com/SergioJaramilloL/proxy_comics_xkcd.git y sigue las instrucciones

## Configuración
Para configurar este proyecto de forma local sigue estas instrucciones:

1. Clona el proyecto de Git:
```
git clone
```
2. Instala las dependencias con YARN ó NPM, el que tu prefieras:
```
npm install
ó
yarn install
```
3. Crea un archivo .env con la variable de entorno:
```
REACT_APP_BASE_URL=http://localhost:8000/
```
4. Ejecuta el proyecto con el siguiente comando:
```
npm start
ó
yarn start
```
## Como interactuar
La aplicación muestra un header en el que el logo tiene una ruta defectuosa para poder ver la página de error, además tiene una barra de navegación con las opciones "comic" y "favoritos", esta última al momento no esta implementada. En el body hay 3 columnas, la primera muestra el comic aleatorio, la segundo tiene la posibilidad de clasificar por categoria y de calificar en un rango de 1 a 5, estas dos opciones estan funcionales y envían el valor de cada una a un estado global, por ultimo esta la tercera columna en donde esta el botón de añadir a favoritos que al pulsarlo guarda los datos del comic actual junto con su clasificación y calificación en el *local storage* del navegador, seguido esta el botón para obtener el siguiente comic. Puedes antojarte mirando la siguiente demostración de comicApp https://drive.google.com/file/d/1_DfyNGpkuJem2CNmVZSy1upxvEsbCI7E/view

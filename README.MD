#WEFRONT v.1.0.0

Ejercicios prácticos de AngularJS

## USO

Copiar la siguiente estructura en la carpeta de proyecto que vayamos a trabajar. 

```
	gulp/
	src/
	typings/
	.bowerrc
	.editorconfig
	.bower.json
	.gulpfile.js
	package.json
	readme.md
	tsconfig.json
	typings.json
```
Para que nos funcionen correctamente todas las dependencias, la versión de node que hay que utilizar es la 4.6.1

Para que nuestro framework se ejecute correctamente, tiene que estar correctamente instalada la version de node-sass
```
$ npm install node-sass@3.4.2
```

Instalar GULP de forma global
````
$ npm install gulp -g
````

Instalamos todas las dependencias del archivo package.json
````
$ npm install
````

Instalar las dependencias basicas del archivo bower.json
```
$ bower install
```

** Si nuestro proyecto tuviera como requisito hacer el desarrollo en TYPESCRIPT, ejecutar los siguiente comando. 
```
$ npm install -g typescript
$ typings install
```


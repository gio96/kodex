const express = require('express');// importamos la libreria express
const morgan = require('morgan');
var app= express();
app.use(morgan('dev')); // este dev es de morgan no el q esta en el json
const puerto= 3000;					//declaramos el puerto, tiene q ser mayor a 1000, las const no pueden cambiar sus valores
app.get('/',function(req,res){
	res.sendfile('./index.html');	// esta sera la ruta q cargue de primeras			
	//res.send("Hola desde el response"); // lo q me responde el sevidor en el navegador
});

app.get('/home',function(req,res){
	res.send("Hola donde estaremos en la direccion home");
});

app.listen(puerto,function(){
		console.log("Hola");

	});
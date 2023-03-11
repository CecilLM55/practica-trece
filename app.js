let express = require('express');
let app = express();

app.set('view engine', 'ejs');
 // hacer referencia o mapeo a una carpeta virtual que se llama assets.
 app.use('/assets', express.static(__dirname + '/public'));
 let port = process.env.PORT || 3000;
// ayuda a debugear lo que sucede cuando se accede a una ruta en particular
// sirve en caso de falla en el servidor, tener un registro de que sucedió.


//ruta que recibe un parametro.
app.get('/person/:id', function(req, res) {
    res.render('person', {ID: req.params.id });
});

let data = [
    {id: 1, nombre: 'Hugo', apellido: 'Estrada Ramirez', edad: 19},
    {id: 2, nombre: 'Estela', apellido: 'Perez Suarez', edad: 18},
    {id: 3, nombre: 'Sabrina', apellido: 'Contreras Morales', edad: 17}
];

app.get('/personas', function (req, res) {
    res.render('personas', {data});
});

app.listen(port);
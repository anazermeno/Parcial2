// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');
// Consulta SQL.
var sql = 'SELECT * FROM Alumnos LIMIT 10';

// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'parcial2_A00824913'
});

// Funcion que nos devolverá resultados de la base de datos.
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera)VALUES('Ana Lizbeth Zermeno Torres', 'A00824913','A00824913@tec.mx','ITC'),('Carolina Geronis', 'A00346578','A00346578@tec.mx','IQA');", function (err, result, fields) {
        if (err) throw err;
        console.log("Se insertan registros");
        console.log(result);
    });

    con.query("SELECT * FROM Alumnos", function (err, result, fields) {
        if (err) throw err;
        console.log("Se consultan resgistros insertados")
        console.log(result);
    });

    con.query("UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 8", function (err, result, fields) {
        if (err) throw err;
        console.log("Se actualizan registros insertados")
        console.log(result);
    });

    con.query("SELECT * from Alumnos;", function (err, result, fields) {
        if (err) throw err;
        console.log("Se consultan resgistros actualizados")
        console.log(result);
    });

    con.query("DELETE from Alumnos WHERE Id = 8", function (err, result, fields) {
        if (err) throw err;
        console.log("Se elimina segundo registro")
        console.log(result);
    });

    con.query("SELECT * from Alumnos;", function (err, result, fields) {
        if (err) throw err;
        console.log("Se consultan resgistros restantes")
        console.log(result);
    });

});

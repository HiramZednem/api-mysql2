import { connection } from "../db/db.js";

export function getUsuarios(req, res) {
  connection.execute("SELECT * FROM usuarios;", (err, results, fields) => {
    console.log(results);
    res.send(results);
  });
}

export function crearUsuario(req, res) {
  try {
    const { nombre, correo, contrasenia } = req.body;

    if (!nombre || !correo || !contrasenia) {
      return res.status(400).send("Faltan datos");
    }

    connection.execute(
      "INSERT INTO usuarios (nombre, correo, contrasenia) VALUES (?, ?, ?);",
      [nombre, correo, contrasenia],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error al crear el usuario");
        } else {
          res.send("Usuario creado correctamente");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Error al crear el usuario");
  }
}

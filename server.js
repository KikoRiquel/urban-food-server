const express = require('express');
const mysql = require('mysql');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const path = require('path');

const app = express();
// const secretKey = 'your_secret_key'; // Cambia esto por una clave secreta fuerte

// app.use(cors());
// app.use(express.json());

const MYSQLDATABASE = process.env.MYSQLDATABASE || "burguer";
const MYSQLHOST = process.env.MYSQLHOST || "localhost";
const MYSQLPASSWORD = process.env.MYSQLPASSWORD || "";
const MYSQLPORT = process.env.MYSQLPORT || 3306;
const MYSQLUSER = process.env.MYSQLUSER || "root";

// Conexión a la base de datos
const db = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE,
  port: MYSQLPORT,
});

app.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM Productos')
  res.json(rows)
})

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log("🚀 ~ port:", port)


// lib/db.js (o db.ts si usas TypeScript)
import { Pool } from 'pg';

const pool = new Pool({
  user: 'tu_usuario',         // Usuario de PostgreSQL
  host: 'localhost',           // Dirección del servidor
  database: 'proplayas',       // Nombre de tu base de datos
  password: '',   // Contraseña
  port: 5432,    // Puerto
});

export const query = (text, params) => {
  return pool.query(text, params);
};

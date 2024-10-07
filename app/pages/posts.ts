// pages/api/posts.js (o .ts)

//Traer los posts
import { query } from '@/app/lib/db' 

export default async function handler(req, res) {
  try {
    // Realiza la consulta a la base de datos para obtener los posts
    const result = await query('SELECT * FROM posts');
    res.status(200).json(result.rows);  // Envía los datos como JSON al frontend
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
}

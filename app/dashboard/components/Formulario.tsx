// Formulario.tsx
import React, {useState} from 'react';
import { ContentType } from '@/app/lib/types';
import { postBlog } from '@/app/lib/dashboard/publicacion';

interface FormularioProps {
  publicationType: ContentType;
}

export const Formulario: React.FC<FormularioProps> = ({ publicationType }) => {  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Formatear la fecha de subida en el formato correcto
    
    // para publicar en Blog
    const postData = {
      title,
      body,
      author: "http://localhost:8000/api/users/2",
      uploaded_at: new Date().toISOString(),
      status
    };

    try {
      const response = await postBlog(postData);
      console.log("Publicación creada:", response);
    } catch (error) {
      console.error('Error al crear la publicación:', error);
    }
  };

  return (
    <section>
      <div className="text-xl my-5 font-semibold">Crear {publicationType}</div>
      <form className="max-w-l mx-auto mb-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Titulo de {publicationType}</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />

        </div>
        {publicationType === "Webinarios" &&(
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Fecha del webinar</label>
            <input
              type="date"
              id="webinarDate"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <label className="block my-2 text-sm font-medium text-gray-900">Hora</label>
            <input
              type="time"
              id="webinarTime"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <label className="block my-2 text-sm font-medium text-gray-900">Link del webinar</label>
            <input
              type="url"
              id="webinarUrl"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder='https://link-al-registro.com'
              required
            />
          </div>
          
        )}

        {publicationType === 'Libros' && (
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Autor</label>
            <input
              type="text"
              id="bookAutor"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <label className="block my-2 text-sm font-medium text-gray-900">Link del libro</label>
            <input
              type="url"
              id="bookLink"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        )}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
          <textarea
            id="description"
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>


        {publicationType === 'Web Series' && (
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Link del capítulo (YouTube)</label>
            <input
              type="url"
              id="videoLink"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        )}

        {publicationType === 'Publicaciones' && (
          <div className="max-w-lg mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Subir imagen</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              aria-describedby="post_imagen"
              id="post_imagen"
            />  
          </div>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Publicar
        </button>
      </form>
    </section>
  );
};

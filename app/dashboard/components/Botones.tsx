import React, { useState } from 'react';

export const TabButtons = ({ onChange }) => {
  const [activeTab, setActiveTab] = useState('Publicaciones'); // Estado para la pestaña activa
  
  const handleClick = (type:any) => {
    setActiveTab(type); // Cambia la pestaña activa
    onChange(type); // Notifica al componente principal el cambio
  };

  return (
    <section>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 light:border-gray-700 light:text-gray-400">
        <li className="mr-2">
          <button
            onClick={() => handleClick('Publicaciones')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'Publicaciones' ? 'text-blue-600 bg-gray-100 light:bg-gray-800 light:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 light:hover:bg-gray-800 light:hover:text-gray-300'
            }`}
          >
            Publicaciones
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick('Web Series')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'Web Series' ? 'text-blue-600 bg-gray-100 light:bg-gray-800 light:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 light:hover:bg-gray-800 light:hover:text-gray-300'
            }`}
          >
            Web Series
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick('Webinarios')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'Webinarios' ? 'text-blue-600 bg-gray-100 light:bg-gray-800 light:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 light:hover:bg-gray-800 light:hover:text-gray-300'
            }`}
          >
            Webinarios
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => handleClick('Libros')}
            className={`inline-block p-4 rounded-t-lg ${
              activeTab === 'Libros' ? 'text-blue-600 bg-gray-100 light:bg-gray-800 light:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 light:hover:bg-gray-800 light:hover:text-gray-300'
            }`}
          >
            Libros
          </button>
        </li>
      </ul>
    </section>
  );
};

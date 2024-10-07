// Modal.tsx
import React from 'react';
import styles from '@/app/blog/components/blog.module.css';
import Image from 'next/image';
import avatar from '@/public/register/tortuga-marina.jpeg';
export const Modal = ({ isVisible, onClose, post }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto">
        <Image
            className={styles.postImage}
            src={post.imageUrl}
            width={250}
            alt="Imagen de prueba"
        />
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="mb-4">{post.body}</p>
        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
};

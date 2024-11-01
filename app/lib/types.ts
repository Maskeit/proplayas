export interface User {
    email: string;
    roles: string[];
    password: string;
    plainPassword: string;
    profile: string;
    media: string;
}

export type TableColumn = {
    header: string;
    key: string;
    render?: (value: any, row: any) => JSX.Element | string;
  };
  
  // Define la estructura de datos para cada tipo de publicación
  export interface BlogPost {
    title: string;
    uploaded_at: string;
    status: string;
  }
  
  export interface Webinar {
    title: string;
    link: string;
    deadline: string;
    status: string;
  }
  
  export interface WebSeries {
    series: string;
    view_more: string;
  }
  
  export interface Book {
    title: string;
    author: string;
    link: string;
  }
  
  // Definir tipos de contenido y sus configuraciones de columna
  export type ContentType = 'Publicaciones' | 'Web Series' | 'Webinarios' | 'Libros';
  
  export const tabConfig: Record<ContentType, { columns: TableColumn[]; data: any[] }> = {
    
    Publicaciones: {
      columns: [
        { header: 'Título', key: 'title' },
        { header: 'Fecha de Publicación', key: 'uploaded_at' },
        { header: 'Estado', key: 'status' },
      ],
      data: [
        { title: 'Primer Post', uploaded_at: '2023-11-01', status: 'Publicado' },
        { title: 'Segundo Post', uploaded_at: '2023-11-02', status: 'Pendiente' },
      ] as BlogPost[],
    },
    'Web Series': {
      columns: [
        { header: 'Serie', key: 'series' },
        { header: 'Ver Más', key: 'view_more', render: () => `<button>Ver Capítulos</button>` },
      ],
      data: [
        { series: 'Serie 1', view_more: '' },
        { series: 'Serie 2', view_more: '' },
      ] as WebSeries[],
    },
    Webinarios: {
      columns: [
        { header: 'Título', key: 'title' },
        { header: 'Enlace', key: 'link' },
        { header: 'Fecha límite', key: 'deadline' },
        { header: 'Estado', key: 'status' },
      ],
      data: [
        { title: 'Webinario 1', link: 'http://example.com', deadline: '2023-11-15', status: 'Activo' },
        { title: 'Webinario 2', link: 'http://example.com', deadline: '2023-12-01', status: 'Finalizado' },
      ] as Webinar[],
    },
    Libros: {
      columns: [
        { header: 'Título', key: 'title' },
        { header: 'Autor', key: 'author' },
        { header: 'Enlace', key: 'link' },
      ],
      data: [
        { title: 'Libro 1', author: 'Autor 1', link: 'http://example.com' },
        { title: 'Libro 2', author: 'Autor 2', link: 'http://example.com' },
      ] as Book[],
    },
  };
  
// lib/api.ts
export async function apiRequest(endpoint: string, method = 'GET', body: any = null, customHeaders: any = {}) {
  const headers = {
    ...customHeaders,
  };

  const options: RequestInit = { method, headers };
  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, options);
  
    if (response.status === 401) {
      // Manejar específicamente el error 401
      const errorData = await response.json();
      throw new Error('Invalid credentials.');
    } else if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Ocurrió un error en la solicitud.');
    }  
    // Si la respuesta es correcta (200)
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
  
}

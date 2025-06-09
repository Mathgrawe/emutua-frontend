// src/services/api.js

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL;
}

export async function getProducts(searchTerm = '') {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  let url = `${API_URL}/products`;

  if (searchTerm) {
    url += `?search=${encodeURIComponent(searchTerm)}`;
  }

  try {
    const res = await fetch(url, { cache: 'no-store' });


    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {

    return [];
  }
}

// Função para criar um novo produto
export async function createProduct(productData) {
  const API_URL = getBaseUrl();
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}

// Função para atualizar um produto existente
export async function updateProduct(id, productData) {
  const API_URL = getBaseUrl();
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
}

// Função para deletar um produto
export async function deleteProduct(id) {
  const API_URL = getBaseUrl();
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete product');
}
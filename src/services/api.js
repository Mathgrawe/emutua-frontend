// src/services/api.js

function getBaseUrl() {
  // Garante que a variável de ambiente seja lida corretamente
  return process.env.NEXT_PUBLIC_API_URL;
}

// Função para buscar todos os produtos
export async function getProducts(searchTerm = '') {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  let url = `${API_URL}/products`;

  if (searchTerm) {
    url += `?search=${encodeURIComponent(searchTerm)}`;
  }

  // NOSSO SEGUNDO CONSOLE.LOG
  console.log(`[API SERVICE] Tentando fazer fetch para a URL: ${url}`);

  try {
    const res = await fetch(url, { cache: 'no-store' });

    // NOSSO TERCEIRO CONSOLE.LOG
    console.log('[API SERVICE] Resposta recebida. Status:', res.status);

    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    // NOSSO QUARTO CONSOLE.LOG
    console.error('[API SERVICE] A chamada fetch FALHOU. Erro:', error);
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
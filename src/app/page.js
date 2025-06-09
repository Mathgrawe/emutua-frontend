'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import ProductTable from '@/components/ProductTable';
import ProductDrawer from '@/components/ProductDrawer';
import { createProduct, updateProduct, deleteProduct, getProducts } from '@/services/api';
import PageHeader from '@/components/PageHeader';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null); 
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async (search) => {
    setIsLoading(true);
    const productsData = await getProducts(search);
    setProducts(productsData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log(`[PAGE] O debounce terminou. Vou buscar por: "${searchTerm}"`);
      fetchProducts(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, fetchProducts]);


  const handleNewProduct = () => {
    setProductToEdit(null);
    setIsDrawerOpen(true);   
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product); 
    setIsDrawerOpen(true);   
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await deleteProduct(productId);
        router.refresh(); 
      } catch (error) {
        console.error('Falha ao deletar o produto', error);
        alert('Erro ao deletar o produto.');
      }
    }
  };

  const handleFormSubmit = async (formData, productId) => {
    try {
      if (productId) {
        await updateProduct(productId, formData); 
      } else {
        await createProduct(formData); 
      }
      setIsDrawerOpen(false);
      router.refresh(); 
    } catch (error) {
      console.error('Falha ao salvar o produto', error);
      alert('Erro ao salvar o produto.');
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <PageHeader 
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onNewProduct={handleNewProduct}
      />
      
      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Carregando...</div>
      ) : (
        <ProductTable 
          products={products} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct}
        />
      )}

      <ProductDrawer
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        productToEdit={productToEdit}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
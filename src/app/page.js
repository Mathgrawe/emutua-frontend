'use client';

import { useState, useEffect, useCallback } from 'react';
import PageHeader from '@/components/PageHeader';
import ProductTable from '@/components/ProductTable';
import ProductDrawer from '@/components/ProductDrawer';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal'; 
import { createProduct, updateProduct, deleteProduct, getProducts } from '@/services/api';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = useCallback(async (search = '') => {
    setIsLoading(true);
    const productsData = await getProducts(search);
    setProducts(productsData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
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

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!productIdToDelete) return;
    try {
      await deleteProduct(productIdToDelete);
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productIdToDelete));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Falha ao deletar o produto', error);
      alert('Erro ao deletar o produto.');
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
      fetchProducts(searchTerm);
    } catch (error) {
      console.error('Falha ao salvar o produto', error);
      alert('Erro ao salvar o produto.');
    }
  };

  return (
    <div className="p-8">
      <PageHeader 
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onNewProduct={handleNewProduct}
      />
      
      <div className="mt-8">
        {isLoading ? (
          <div className="text-center py-10 text-gray-500">Carregando...</div>
        ) : (
          <ProductTable 
            products={products} 
            onEdit={handleEditProduct} 
            onDelete={handleDeleteClick} 
          />
        )}
      </div>

      <ProductDrawer
        open={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        productToEdit={productToEdit}
        onFormSubmit={handleFormSubmit}
      />
      
      <DeleteConfirmationModal 
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

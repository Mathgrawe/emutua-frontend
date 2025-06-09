import { useState, useEffect } from 'react';

export default function ProductForm({ productToEdit, onSuccess, onCancel }) {
  const initialState = {
    name: '',
    price: '',
    category: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name,
        price: productToEdit.price,
        category: productToEdit.category,
        description: productToEdit.description,
      });
    } else {
      setFormData(initialState);
    }
  }, [productToEdit]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
    };
    onSuccess(submissionData, productToEdit?.id);
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col justify-between">
      <div className="space-y-6">
        {/* Nome do Produto */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome do Produto</label>
          <div className="mt-2">
            <input id="name" name="name" type="text" required value={formData.name || ''} onChange={handleChange} className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
          </div>
        </div>
        
        {/* Preço */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Preço</label>
          <div className="mt-2">
            <input id="price" name="price" type="number" step="0.01" required value={formData.price || ''} onChange={handleChange} className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
          </div>
        </div>
        
        {/* Categoria */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Categoria</label>
          <div className="mt-2">
            <input id="category" name="category" type="text" required value={formData.category || ''} onChange={handleChange} className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
          </div>
        </div>
        
        {/* Descrição */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descrição</label>
          <div className="mt-2">
            <textarea id="description" name="description" rows={4} required value={formData.description || ''} onChange={handleChange} className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex flex-shrink-0 justify-end space-x-4 border-t border-gray-200 pt-4 mt-6">
        <button type="button" onClick={onCancel} className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Cancelar
        </button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Salvar
        </button>
      </div>
    </form>
  );
}
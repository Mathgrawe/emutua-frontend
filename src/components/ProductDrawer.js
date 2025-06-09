import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProductForm from './ProductForm';

export default function ProductDrawer({ open, setOpen, productToEdit, onFormSubmit }) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {/* O container principal do drawer */}
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      {productToEdit ? 'Editar Produto' : 'Adicionar Novo Produto'}
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Fechar painel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Conteúdo (Formulário) com padding */}
                <div className="relative flex-1 px-4 py-6 sm:px-6">
                  <ProductForm 
                    productToEdit={productToEdit} 
                    onSuccess={onFormSubmit} 
                    onCancel={handleClose} 
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
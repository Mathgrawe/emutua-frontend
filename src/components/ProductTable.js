// src/components/ProductTable.js
import ProductRow from './ProductRow';

// 1. Receba onEdit e onDelete aqui
export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm border-b border-gray-200">
            <th className="px-5 py-3 text-left tracking-wider">ID</th>
            <th className="px-5 py-3 text-left tracking-wider">Nome</th>
            <th className="px-5 py-3 text-left tracking-wider">Preço</th>
            <th className="px-5 py-3 text-left tracking-wider">Categoria</th>
            <th className="px-5 py-3 text-center tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              // 2. Passe as funções para o ProductRow
              <ProductRow 
                key={product.id} 
                product={product} 
                onEdit={onEdit} 
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-10 text-gray-500">
                Nenhum produto encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default function ProductRow({ product, onEdit, onDelete }) {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
            <td className="text-black px-5 py-4 text-sm">{product.id}</td>
            <td className="text-black px-5 py-4 text-sm">{product.name}</td>
            <td className="text-black px-5 py-4 text-sm">
                R$ {product.price && product.price.toFixed(2)}
            </td>
            <td className="text-black px-5 py-4 text-sm">{product.category}</td>
            <td className="px-5 py-4 text-sm text-center">
                <button
                    onClick={() => onEdit(product)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold"
                >
                    Editar
                </button>
                <button
                    onClick={() => onDelete(product.id)}
                    className="text-red-600 hover:text-red-900 font-semibold"
                >
                    Excluir
                </button>
            </td>
        </tr>
    );
}
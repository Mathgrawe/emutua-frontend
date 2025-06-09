export default function PageHeader({ searchTerm, onSearchChange, onNewProduct }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Gerenciamento de Produtos
        </h1>
        <button
          onClick={onNewProduct}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
        >
          Novo Produto
        </button>
      </div>

      {/* --- Campo de Busca --- */}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={onSearchChange}
          className="block w-full rounded-lg border-0 py-2.5 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Buscar por nome, descrição ou categoria..."
        />
      </div>
    </div>
  );
}
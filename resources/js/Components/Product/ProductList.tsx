import React from 'react'

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example product card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-4">$19.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductList
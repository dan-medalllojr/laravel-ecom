import MainLayout from '@/Components/Layout/MainLayout'
import ProductList from '@/Components/Product/ProductList'
import React from 'react';

const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to LaraStore</h1>
        <p className="text-gray-600">Discover our amazing products!</p>

        <ProductList />
      </div>
    </MainLayout>
  )
}

export default Home
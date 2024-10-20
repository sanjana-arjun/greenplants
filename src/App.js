import React from 'react'
import ProductListing from './components/ProductListing'
import './App.css'

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Product 2',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Product 2',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Product 2',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
    },
  ]

  return (
    <div className="App">
      <ProductListing products={products} />
    </div>
  )
}

export default App

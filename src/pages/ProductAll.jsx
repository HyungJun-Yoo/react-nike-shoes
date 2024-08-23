import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '/src/component/ProductCard'
import { useSearchParams } from 'react-router-dom'

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://my-json-server.typicode.com/HyungJun-Yoo/react-nike-shoes'
    : 'http://localhost:3000'

const ProductAll = () => {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    const searchQuery = query.get('q') || ''

    try {
      const response = await axios.get(`${apiUrl}/products?q=${searchQuery}`)
      const allProducts = response.data

      const filteredProducts = searchQuery
        ? allProducts.filter((product) => product.name.includes(searchQuery))
        : allProducts

      setProducts(filteredProducts)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div className='flex justify-center'>
      <div className='max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductAll

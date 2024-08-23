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
    const searchCategory = query.get('category') || ''

    try {
      let response
      if (searchQuery === '' && searchCategory === '') {
        response = await axios.get(`${apiUrl}/products`)
      } else if (searchQuery) {
        response = await axios.get(`${apiUrl}/products?q=${searchQuery}`)
      } else {
        response = await axios.get(
          `${apiUrl}/products?category=${searchCategory}`
        )
      }

      const allProducts = response.data

      let filteredProducts

      if (searchQuery) {
        filteredProducts = allProducts.filter((product) =>
          product.name.includes(searchQuery)
        )
      } else if (searchCategory) {
        filteredProducts = allProducts.filter((product) =>
          product.type.includes(searchCategory)
        )
      } else {
        filteredProducts = allProducts
      }

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
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))
        ) : (
          <div className='col-span-full mt-4 text-2xl font-bold text-gray-700 text-center'>
            <p>상품이 존재하지 않습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductAll

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '/src/component/ProductCard'

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://my-json-server.typicode.com/HyungJun-Yoo/react-nike-shoes'
    : 'http://localhost:3000'

const ProductAll = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`)
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='flex justify-center'>
      <div className='max-w-[1280px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductAll

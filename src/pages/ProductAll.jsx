import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div>
      <div className='grid grid-cols-4 gap-6 p-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-60 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
              <p className='text-gray-800 font-bold'>
                가격: {product.price} 원
              </p>
              <p className='text-gray-600'>타입: {product.type}</p>
              <p className='text-gray-600'>대상: {product.target}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductAll

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://my-json-server.typicode.com/HyungJun-Yoo/react-nike-shoes'
    : 'http://localhost:3000'

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [size, setSize] = useState(null)

  const getProductDetail = async () => {
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  if (!product) return null

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1280px] flex p-4'>
        <div className='min-w-[480px]'>
          <img
            width={480}
            height={480}
            src={product?.image}
            alt={product?.name}
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex flex-col ml-4 gap-6'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>{product?.name}</h1>
            <p className='text-lg text-gray-700'>{product?.target}</p>
            <p className='text-xl font-semibold'>
              {formatPrice(product?.price)} 원
            </p>
          </div>

          <div className='mt-4'>
            <p className='text-lg font-bold'>사이즈 선택</p>
            <div className='grid grid-cols-5 gap-2 mt-2'>
              {Array.from({ length: 15 }, (_, i) => 230 + i * 5).map((s) => (
                <button
                  key={s}
                  className={`border rounded-md p-1 hover:bg-gray-200 ${
                    size === s ? 'bg-gray-800 text-white' : ''
                  }`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-col mt-8 gap-4'>
            <button className='bg-black text-white rounded-md p-4'>
              장바구니
            </button>
            <button className='bg-white border border-gray-400 rounded-md p-4'>
              위시리스트
            </button>
          </div>

          <div className='mt-4'>
            <p className='whitespace-pre-line'>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

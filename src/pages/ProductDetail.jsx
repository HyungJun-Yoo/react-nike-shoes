import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://my-json-server.typicode.com/HyungJun-Yoo/react-nike-shoes'
    : 'http://localhost:3000'

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [size, setSize] = useState(null)
  const [count, setCount] = useState(1)

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

  const handleMinus = () => {
    if (count === 1) {
      return
    }

    setCount((prev) => prev - 1)
  }

  const handlePlus = () => {
    setCount((prev) => prev + 1)
  }

  if (!product) return null

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1280px] flex flex-col md:flex-row p-1 sm:p-4'>
        <div className='flex-[0_0_35%] min-w-[350px]'>
          <img
            width={480}
            height={480}
            src={product.image}
            alt={product.name}
            className='w-full h-auto object-cover mb-8 md:mb-1'
          />
        </div>
        <div className='flex flex-col sm:ml-4 sm:gap-6 min-w-[350px]'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>
              {product.name}
            </h1>
            <p className='text-lg text-gray-700'>{product.simple}</p>
            <p className='text-xl font-semibold'>
              {formatPrice(product.price)} 원
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

          <div className='flex flex-col bg-gray-200 h-[200px] mt-8 gap-4 p-8'>
            <div className='text-lg sm:text-xl font-bold text-gray-600 mb-8'>
              {product?.name}
            </div>
            <div className='flex justify-between items-center sm:p-4 border-b'>
              <div className='flex items-center space-x-2'>
                <button
                  onClick={() => handleMinus()}
                  className='w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 border border-gray-400 rounded'
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className='w-14 h-7 sm:w-20 sm:h-10 flex items-center justify-center text-lg font-semibold border border-gray-400 rounded'>
                  {count}
                </p>
                <button
                  onClick={() => handlePlus()}
                  className='w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 border border-gray-400 rounded'
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className='text-base sm:text-lg font-bold text-gray-800 ml-4'>
                {formatPrice(product.price * count)}원
              </div>
            </div>
          </div>

          <div className='flex flex-col mt-8 gap-4'>
            <button className='bg-black text-white rounded-md p-4'>
              장바구니
            </button>
            <button className='bg-white border border-gray-400 rounded-md p-4'>
              구매하기
            </button>
          </div>

          <div className='mt-4 mb-3'>
            <p className='whitespace-pre-line text-gray-700'>
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

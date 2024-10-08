import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showProduct = (id) => {
    navigate(`/product/${id}`)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div
      key={item.id}
      className={`min-w-[300px] border ${
        item.choice
          ? 'border-pastel_pink shadow-lg shadow-pastel_pink transition-transform duration-300 transform'
          : 'border-gray-300'
      } rounded-lg overflow-hidden transition-shadow duration-300 bg-white cursor-pointer`}
      onClick={() => showProduct(item.id)}
    >
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-48 sm:h-56 lg:h-60 object-cover transition-transform duration-300 transform hover:scale-105'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2 text-gray-900 line-clamp-1'>
          {item.name}
        </h2>
        <div className='text-gray-600 text-sm'>
          <p className='truncate'>타입: {item.type}</p>
          <p className='truncate'>대상: {item.simple}</p>
        </div>
        <p className='text-gray-800 font-bold text-xl mt-2'>
          가격: {formatPrice(item.price)} 원
        </p>
      </div>
    </div>
  )
}

export default ProductCard

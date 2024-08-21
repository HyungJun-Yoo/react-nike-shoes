import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '/src/assets/logo.jpg'

const Navbar = () => {
  const menuItems = [
    '라이프스타일',
    '조던',
    '러닝',
    '농구',
    '트레이닝 및 짐',
    '축구',
    '스케이트보딩',
    '미식축구',
    '골프',
    '테니스',
    '트랙 및 필드',
    '샌들 & 슬리퍼',
  ]

  return (
    <div>
      <div className='flex justify-between p-4 bg-white shadow-md'>
        <div className='flex justify-center flex-grow'>
          <img
            src={logo}
            alt='Nike Logo'
            className='h-36 transition-transform duration-300 hover:scale-105'
          />
        </div>

        <div className='flex items-start w-[120px] mt-4'>
          <button className='flex items-center bg-teal-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
            <FontAwesomeIcon icon={faUser} className='mr-2' />
            로그인
          </button>
        </div>
      </div>

      <div className='flex justify-center m-4 mr-[120px]'>
        <input
          type='text'
          placeholder='검색어를 입력하세요'
          className='border border-gray-300 rounded-l-full px-4 py-3 w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200'
        />
        <button className='flex items-center bg-teal-600 text-white px-6 py-3 rounded-r-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-teal-500 text-lg'>
          <FontAwesomeIcon icon={faSearch} className='mr-2' />
          검색
        </button>
      </div>

      <nav className='bg-gray-100 text-gray-700 p-4 shadow-md'>
        <div className='flex justify-center space-x-8'>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              className='text-lg font-semibold hover:text-teal-500 transition-colors duration-300'
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar

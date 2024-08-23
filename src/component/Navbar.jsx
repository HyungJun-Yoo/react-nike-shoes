import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faSearch,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import logo from '/src/assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [menuOpen, setMenuOpen] = useState(false) // 메뉴 열림 상태
  const navigate = useNavigate()
  const menuItems = [
    '라이프스타일',
    '조던',
    '러닝',
    '농구',
    '트레이닝',
    '축구',
    '스케이트보딩',
    '미식축구',
    '골프',
    '테니스',
    '트랙 및 필드',
    '샌들 & 슬리퍼',
  ]

  const handleLogout = () => {
    setAuthenticate(false)
    navigate('/login')
  }

  const handleMenu = () => {
    navigate('/')
  }

  const handleSearch = () => {
    navigate(`/?q=${searchKeyword}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div>
      <div className='flex justify-between p-4 bg-black shadow-md'>
        <div
          onClick={() => navigate('/')}
          className='flex justify-center items-center relative cursor-pointer'
        >
          <img
            src={logo}
            alt='Nike Logo'
            className='h-36 transition-transform duration-300 hover:scale-105'
          />
          <h1 className='text-white text-3xl font-bold absolute right-[-100px]'>
            NIKE-SHOES
          </h1>
        </div>

        <div
          onClick={
            authenticate ? () => handleLogout() : () => navigate('login')
          }
          className='flex items-center w-[120px]'
        >
          <button className='flex items-center bg-gray-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300'>
            <FontAwesomeIcon icon={faUser} className='mr-2' />
            <span>{authenticate ? '로그아웃' : '로그인'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='fixed top-0 left-0 bg-white w-1/2 h-full z-10 shadow-lg flex flex-col'>
          <button className='self-end p-2' onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='text-lg font-semibold hover:text-teal-500 transition-colors duration-300 cursor-pointer p-2'
              onClick={() => {
                handleMenu()
                setMenuOpen(false)
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      <div className='bg-black sm:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className='text-white p-4 text-3xl'
          />
        </button>
      </div>

      <nav className='hidden sm:flex sm:justify-center w-full p-4 shadow-md'>
        <div className='max-w-[1280px] grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className='text-base sm:text-lg font-semibold hover:text-teal-500 transition-colors duration-300 cursor-pointer p-2 rounded hover:bg-teal-50'
              onClick={() => handleMenu()}
            >
              {item}
            </div>
          ))}
        </div>
      </nav>

      <div className='flex justify-center mt-4'>
        <input
          type='text'
          placeholder='상품명을 입력하세요'
          className='border border-gray-300 rounded-l-full px-4 py-3 w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200'
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className='flex items-center bg-gray-600 text-white px-6 py-3 rounded-r-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-500 text-lg'>
          <FontAwesomeIcon icon={faSearch} className='p-2' />
        </button>
      </div>
    </div>
  )
}

export default Navbar

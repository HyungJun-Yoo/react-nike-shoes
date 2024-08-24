import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setAuthenticate(true)
    navigate('/')
  }

  return (
    <div className='max-w-[1280px] mx-auto p-1 sm:p-8 bg-white'>
      <h1 className='text-3xl font-bold mb-8 text-center text-black'>로그인</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-200 shadow-md rounded-lg p-12 min-w-[350px]'
      >
        <div className='mb-6'>
          <label
            className='block text-gray-700 mb-2 text-lg font-bold'
            htmlFor='email'
          >
            아이디(Email)
          </label>
          <div className='flex items-center border rounded-md'>
            <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 p-2' />
            <input
              type='email'
              id='email'
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '유효한 이메일 형식이 아닙니다.',
                },
              })}
              className={`flex-1 p-3 rounded-md text-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder='example@domain.com'
            />
          </div>
          {errors.email && (
            <p className='text-red-500 text-base'>{errors.email.message}</p>
          )}
        </div>

        <div className='mb-6'>
          <label
            className='block text-gray-700 mb-2 text-lg font-bold'
            htmlFor='password'
          >
            비밀번호
          </label>
          <div className='flex items-center border rounded-md'>
            <FontAwesomeIcon icon={faLock} className='text-gray-400 p-2' />
            <input
              type='password'
              id='password'
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
              className={`flex-1 p-3 rounded-md text-lg ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder='비밀번호를 입력하세요'
            />
          </div>
          {errors.password && (
            <p className='text-red-500 text-base'>{errors.password.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-gray-800 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition duration-300 mt-8'
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default Login

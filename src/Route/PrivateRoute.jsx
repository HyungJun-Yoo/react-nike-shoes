import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '/src/pages/ProductDetail'
import { useLocation } from 'react-router'

const PrivateRoute = ({ authenticate }) => {
  const location = useLocation()
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to='/login' replace state={{ to: location }} />
  )
}

export default PrivateRoute

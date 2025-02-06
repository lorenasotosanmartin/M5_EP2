import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigate } from 'react-router-dom'

export default function SafeHouse() {
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('jwt-token')
    setToken(token)
    fetch('./safehouse.js', {
      headers: {
        'jwt-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
  }, [])

  function logout() {
    setToken('')
    localStorage.removeItem('jwt-token')
  }

  if (!token) {
     return <Navigate to='/login' />;
  }

  
  return <Navigate to='/Services' />
}
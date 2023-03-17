import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { TokenManager, TokenVariable } from 'utils/TokenManager';

const HomeLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!TokenManager.existToken(TokenVariable.JWT))
      navigate("/login");
    return () => { }
  }, [])

  return (
    <Outlet />
  )
}

export default HomeLayout
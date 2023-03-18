import Navbar from 'components/molecules/Navbar';
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
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default HomeLayout
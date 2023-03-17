import { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Error404 from 'pages/Error404';
import Login from 'pages/Login';
import Home from 'pages/Home';
import LoginLayout from 'layouts/LoginLayout';
import HomeLayout from 'layouts/HomeLayout';
import Atoms from 'pages/Atoms';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/Theme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThemeProvider theme={theme} > */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navigate to="login" />} />
          <Route path="atoms" element={<Atoms />} />
          <Route path="login" element={<LoginLayout />} >
            <Route index element={<Login />} />
          </Route>
          <Route path="home" element={<HomeLayout />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  )
}

export default App

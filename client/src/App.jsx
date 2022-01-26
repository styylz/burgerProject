import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/partials/navbar';
import SignIn from './pages/sign-in-page';
import Register from './pages/register-page';
import Home from './pages/home-page';

const App = () => (
  <CssBaseline>
    <RouterProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </RouterProvider>
  </CssBaseline>

);

export default App;

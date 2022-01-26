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

const App = () => (
  <CssBaseline>
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </RouterProvider>
  </CssBaseline>

);

export default App;

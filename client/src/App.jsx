import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/partials/navbar';

const App = () => (
  <RouterProvider>
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  </RouterProvider>
);

export default App;

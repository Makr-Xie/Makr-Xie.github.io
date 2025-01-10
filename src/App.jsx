// src/App.jsx
import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; 

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Outlet />
    </>
  );
}

export default App;

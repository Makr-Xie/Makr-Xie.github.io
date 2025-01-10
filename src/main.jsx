import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import PhotoGallery from './components/PhotoGallery/PhotoGallery.jsx'
import BeyondCS from './components/BeyondCS/BeyondCS.jsx'
import Projects from './components/Projects/Projects.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: (
        <App />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "gallery", element: <PhotoGallery /> },
        { path: "projects", element: <Projects /> },
        { path: "beyondcs", element: <BeyondCS /> },
      ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

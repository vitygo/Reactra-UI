import Header from './components/MainPage/Header/Header'
import MainPage from './components/MainPage/MainPage'
import {Routes, Route} from 'react-router-dom'
import ComponentsPage from './components/ComponentsPage/ComponentsPage'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);



  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/components' element={<ComponentsPage/>}/>
    </Routes>

    </>
  )
}

export default App

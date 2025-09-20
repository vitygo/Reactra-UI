import Header from './components/MainPage/Header/Header'
import MainPage from './components/MainPage/MainPage'
import {Routes, Route} from 'react-router-dom'
import ComponentsPage from './components/ComponentsPage/ComponentsPage'
function App() {


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

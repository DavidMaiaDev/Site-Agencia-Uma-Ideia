import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Service from './routes/service/Service'
import Contact from './routes/contact/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/servicos' element={<Service />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

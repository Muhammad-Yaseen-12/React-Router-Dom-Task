import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Header from '../components/Header/Header'
import Notfound from './Notfound'

function Routee() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='*' element={<Notfound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routee

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { ProductstPage } from './pages/products'
import { ContactPage } from './pages/contact'


const App = () => {
return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/products' element={<ProductstPage />} />
          <Route path='/contact' element={<ContactPage />} />
     
        </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App
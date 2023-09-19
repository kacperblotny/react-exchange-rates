import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useMemo } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import { ExchangeContext } from './context/ExchangeContext'

function App() {
  const [amount, setAmount] = useState(1)
  const [group, setGroup] = useState('A')

  const amountProps = { amount, setAmount }
  const groupProps = { group, setGroup }

  return (
    <ExchangeContext.Provider value={{ amountProps, groupProps }}>
      <Router>
        <div className='flex flex-col w-screen min-h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12 w-full pt-24 min-h-screen'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<Notfound />} />
              <Route path='/*' element={<Notfound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ExchangeContext.Provider>
  )
}

export default App

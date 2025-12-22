
import './App.css'

import HomePage from './Homepage.jsx'
import AboutUs from './AboutUs.jsx'
import { Routes,Route } from "react-router-dom"
import BookingPage from './BookingPage.jsx'

function App() {

  return (
    <>
  
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </main>

    </>
  )
}



export default App

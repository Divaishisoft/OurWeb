
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Front/Pages/Home'
import NoPage from './Front/Pages/NoPage'

function App() {

  return (
    <>
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Routes>
    </>
  )
}

export default App

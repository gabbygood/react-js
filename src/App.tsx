import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students'
import Admin from './pages/Admin'
import DashBoard from './pages/Dashboard'
import NoPage from './pages/NoPage'
// import './App.css'
import './output.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashBoard />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/students' element={<Students/>} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

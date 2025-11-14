import './App.css'
import  { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/community' element={<CommunityPage/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

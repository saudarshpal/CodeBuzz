import './App.css'
import  { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'
import UserPage from './pages/UserPage'
import LandingPage from './pages/LandingPage'
import UserAccount from './pages/UserAccount'



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
        <Route path='/community/:communityId' element={<CommunityPage/>}></Route>
        <Route path='/user/:userId' element={<UserPage/>}></Route>
        <Route path='/account' element={<UserAccount/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

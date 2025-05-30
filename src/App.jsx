import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Panel from './components/Panel/Panel'
import Inner from './pages/Inner/Inner'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path ="/main" element={<Inner/>}/>
        <Route path ="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App

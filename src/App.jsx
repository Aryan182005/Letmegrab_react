import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/homePage'

function App() {

  return (
    <>
    <p>ahdsgshb</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

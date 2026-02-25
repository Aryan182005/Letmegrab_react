import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/homePage'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App

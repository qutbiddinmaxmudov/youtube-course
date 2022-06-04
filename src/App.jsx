import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Favorite from './pages/Favorite'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/category/:type" element={<Category />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

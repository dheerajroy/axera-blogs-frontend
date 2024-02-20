import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Explore from './Pages/Explore';
import About from './Pages/About';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:title-:id' element={<Blog />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

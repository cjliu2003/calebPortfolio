import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { About, Footer, Home, Navbar, Projects } from './containers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
          <Navbar />
          <Home />
          <Footer />
          </div>
        } 
        />
        <Route path="/about" element={
          <div>
          <Navbar />
          <About />
          <Footer />
          </div>
        }/>
        <Route path="/projects" element={
          <div>
          <Navbar />
          <Projects />
          <Footer />
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;

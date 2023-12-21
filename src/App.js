import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { About, Footer, Home, Navbar, Projects, Timeline } from './containers';

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
        <Route path="/timeline" element={
          <div>
          <Navbar />
          <Timeline />
          <Footer />
          </div>
        }/> 
      </Routes>
    </Router>
  );
}

export default App;

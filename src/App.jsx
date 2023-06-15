import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar'
import Home from './components/Home';
import  Products  from './components/Products';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
{/* -------------------------------Index------------------------------- */}
        <Route path='/' element = {<Home/>}/>
{/* -------------------------------Products------------------------------- */}
        <Route path = '/products' element = {<Products/>}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Contacts from './pages/contacts/Contacts';
import Projects from './pages/projects/Projects';
import SingleProject from './pages/singleproject/SingleProject';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

import ScrollToTop from './utils/scrollToTop';

import './styles/main.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/Project/:id' element={<SingleProject/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

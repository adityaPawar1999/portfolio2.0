import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "styled-components";

import {Routes,Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

import Home from './pages/homepage/Home'
import About from './pages/about/About';
import Error from './pages/Error'

import MainData from './pages/homepage/MainData';
import Footer from './components/Footer/Footer';


function App() {
  const theme = {
    colors: {
      mainColor:"#F77A36",
      textColor:"#222222",
      gray:"#cccccc",
      white:"#fff"
    },
  };
  return (
    <>
    <MainData>
        <ThemeProvider theme={theme}>
  <Navbar/>
    <div className='container AppBox'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/projects' element={<Home/>}></Route>
      <Route path='/contact' element={<Home/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </div>
    <Footer/>
    </ThemeProvider>
</MainData>
    </>
  );
}
export default App;

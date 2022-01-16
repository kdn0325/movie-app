import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from './component/Navigation';


function App(){
  return(
      <BrowserRouter>
        <Navigation/>
        <Routes><Route path="/" exact={true} element={<Home/>}></Route></Routes>
        <Routes><Route path="/about" element={<About/>}></Route></Routes>
        <Routes><Route path="/movie-detail" element={<Detail/>}></Route></Routes>
      </BrowserRouter>
  );
}

export default App
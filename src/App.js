import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import TodoApp from './Components/TodoApp/TodoApp';
import Header from './Components/Header/Header';
import About from './Components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
    {/* <TodoApp /> */}
      <Routes>
        
        <Route exact path="/TodoApp" element={<TodoApp />} />
        <Route exact path="/About" element={<About />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

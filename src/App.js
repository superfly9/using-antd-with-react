import React from 'react';
import Home from './Pages/Home';
import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App

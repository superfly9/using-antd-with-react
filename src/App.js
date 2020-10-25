import React from 'react';
import Home from './Pages/Home';
import 'antd/dist/antd.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ListPage from './List/List';


function App() {
  return (
    <Router>
      {/* <Home /> */}
      <ListPage />
    </Router>
  )
}

export default App
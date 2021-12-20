import '../Styles/App.css';
import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';

function App() {

  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
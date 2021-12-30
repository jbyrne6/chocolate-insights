import '../Styles/App.css';
import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import FullpageHomepage from './FullpageHomepage'
import CustomNavbar from '../Components/CustomNavbar'

function App() {

  return (
    <Router>
      <div>
        <CustomNavbar currentPage={'About'}/>
        <FullpageHomepage />
      </div>    
    </Router>
  );
}

export default App;
import '../Styles/App.css';
import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #0c0c0c;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1px;
  background: #7cc1ac;
`;

const PageBackground = styled.section`
  background: #7cc1ac;
  height: 100vh;
`;

const Emoji = styled.section`
  font-size: 4em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Announcement = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #0c0c0c;
  padding-top: 1em;
  padding-bottom: 1em;
`;

function App() {
  const [bars, setBars] = useState('')

  const getAllBars = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const allBars = await axios.get("/api/");
    // setBars(allBars.data.rows.map(row => row.number))
    console.log(allBars)
  }, []);

  return (
    <Router>
    <PageBackground>
      <Wrapper>
        <Title>
          Chocolate Insights
        </Title>
      </Wrapper>
      <Emoji onClick={getAllBars}>
          🍫
      </Emoji>
      <Announcement>
        Chocolate Analytics Coming Soon!
      </Announcement>
    </PageBackground>
    </Router>
  );
}

export default App;


{/* <Fragment>
  <header className="header">
    <div> This is a multicontainer application </div>
    <Link to="/">Home</Link>
    <Link to="/otherpage">Other page</Link>
  </header>
  <div className="main">
    <Route exact path="/" component = {MainComponent} />
    <Route path="/otherpage" component={OtherPage} />
  </div>
</Fragment> */}
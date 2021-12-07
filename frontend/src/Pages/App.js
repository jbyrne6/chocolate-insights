import '../Styles/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import MainComponent from '../Components/MainComponent';
import { Fragment } from 'react';
import styled from 'styled-components'

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
`;

function App() {
  return (
    <PageBackground>
    <Router>
      <Wrapper>
        <Title>
          Chocolate Insights
        </Title>
        <Emoji>
          🍫
        </Emoji>
      </Wrapper>
    </Router>
    </PageBackground>
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
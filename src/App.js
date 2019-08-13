import React from 'react';
import styled from 'styled-components';

const Welcome = styled.h1`
  font-size: 3rem;
`;

const LoginWrapper = styled.div`
align-items: center;
background-color: white;
box-shadow: 4px 8px 12px 2px lightgrey;
border: ridge 1px lightblue;
border-radius: 1rem;
display: flex;
flex-direction: column;
margin: 2rem auto;
width: 85vw;
`;

const Button = styled.button`
  font-family: monospace;
  box-shadow: 5px 5px 4px 0px grey;
  background-color: white;
  margin: 0 1rem;
`;

const Login = styled.form`
  padding: 3rem;
`;

function MainLogin() {
  return (
    <LoginWrapper>
        <Welcome>Login</Welcome>
        <Login action="">
          <input type="text"></input>
          <Button>Login</Button>
        </Login>
    </LoginWrapper>
  );
}

function About() {
  return (
    <LoginWrapper>
      <Welcome>What is ShiftBid?</Welcome>
    </LoginWrapper>
  );
}

//this is the "component" that i pass to reactDOM's render
function App() {
  return (
    <div className="App">
    <MainLogin className="App"></MainLogin>
    <About></About>
    </div>
  );
}

export default App;
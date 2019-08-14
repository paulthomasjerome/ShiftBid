import React from 'react';
import styled from 'styled-components';

const LoginWelcome = styled.h1`
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

const LoginButton = styled.button`
  box-shadow: 5px 5px 4px 0px grey;
  background-color: white;
  font-family: monospace;
  margin: 0 1rem;
`;

const LoginForm = styled.form`
  padding: 3rem;
`;

function MainLogin() {
  return (
    <LoginWrapper>
      <LoginWelcome>Login</LoginWelcome>
        <LoginForm>
          <input type="text"></input>
          <LoginButton>Login</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}

  export default MainLogin;
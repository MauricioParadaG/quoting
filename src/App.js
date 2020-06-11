import React from 'react';
import HeaderComponent from './components/Header.component';
import styled from '@emotion/styled';
import FormQuotingComponent from './components/FormQuoting.component';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`; 

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`; 

function App() {
  return (
    <AppContainer>
      <HeaderComponent
        title='Property Insurance / Quoting'
      />      
      <FormContainer>
        <FormQuotingComponent/>
      </FormContainer>

    </AppContainer>
  );
}

export default App;

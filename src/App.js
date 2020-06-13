import React, {useState, useEffect} from 'react';
import HeaderComponent from './components/Header.component';
import styled from '@emotion/styled';
import FormQuotingComponent from './components/FormQuoting.component';
import SummaryComponent from './components/Summary.component';
import ResultComponent from './components/Result.component';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`; 

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`; 



////////////////////////////////////////////////////
////////////////////////////////////////////////////



function App() {

  const [formQuoteSummary, setFormQuoteSummaryState] = useState({
    quote: 0,
    formData: {
      type :'',
      year:'',
      city:''
    }
  });

  const {formData} = formQuoteSummary;

  return (
    <AppContainer>
      <HeaderComponent
        title='Property Insurance / Quoting'
      />      
      <FormContainer>
        <FormQuotingComponent
          setFormQuoteSummaryState={setFormQuoteSummaryState}
        />

        <SummaryComponent
          formDataState={formData}
        />
      </FormContainer>
      
      <ResultComponent/>

    </AppContainer>
  );
}

export default App;

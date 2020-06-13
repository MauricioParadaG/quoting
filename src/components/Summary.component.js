import React from 'react';
import styled from '@emotion/styled';
import {firstCaps} from '../helper';

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`; 


//////////////////////////////////////////////



const SummaryComponent = props => {
    
    if(props.formDataState.type === '' || props.formDataState.year === '' || props.formDataState.city === '') return null; 

    return (
        <SummaryContainer>
          <h2>Quote Summary</h2>
          <ul>
            <li>Type:{firstCaps(props.formDataState.type)}</li>
            <li>Year:{props.formDataState.year}</li>
            <li>City:{firstCaps(props.formDataState.city)}</li>
            <li>Rooms:{props.formDataState.rooms}</li>
            <li>Mts²:{props.formDataState.qmeters}</li>
            <li>Price:{props.formDataState.price}</li>
            <li>Is it rented?:{firstCaps(props.formDataState.rented)}</li>
          </ul>
        </SummaryContainer>
    )
}

export default SummaryComponent;

import React from 'react'
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const WelcomeMessage = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`; 

const QuotePriceContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`; 

const QuotePrice = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`; 


////////////////////////////////////////////////////
////////////////////////////////////////////////////


const ResultComponent = props => {
//    if(props.quoteInAppState === 0) return null;

    return (
        (props.quoteInAppState === 0) ? <WelcomeMessage>Fill the form and get an insurance quote</WelcomeMessage> 
        : (
        <QuotePriceContainer>
            <TransitionGroup
                component="span"
                className="result"
            >
            <CSSTransition
                classNames="result"
                key={props.quoteInAppState}
                timeout={{enter:500, exit: 500}}
            >
                <QuotePrice>The total is: $ <span>{props.quoteInAppState}</span></QuotePrice> 
            </CSSTransition>
            </TransitionGroup>
        </QuotePriceContainer>
        )
    )
}

export default ResultComponent;

import React from 'react'

const SummaryComponent = props => {
    
    if(props.formDataState.type === '' || props.formDataState.year === '' || props.formDataState.city === '') return null; 

    return (
        <>
          <h2>Quote Summary</h2>
          <ul>
              <li>Type:</li>
              <li>Year:</li>
              <li>City:</li>
          </ul>
        </>
    )
}

export default SummaryComponent

import React, { Component }  from 'react';

const FinalPanel = (props) => {
    console.log("final ", props);
    
    return(
        <div className="final-panel">
            <p>We have { props.totalQuestions } questions.</p>
            <p>You have answered <span>{ props.answered}</span> questions.</p>
            <p>Total units you got is: { props.units}/{ props.totalQuestions }</p>
        </div>
    );
}

export default FinalPanel;

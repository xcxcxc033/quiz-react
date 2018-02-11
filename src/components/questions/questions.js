import React, { Component }  from 'react';
import QuestionOption from './questions-content';
import './questions.css';

class  Questions extends Component {

    render(){

        return(
            <div>
                <div><h1>Questions:</h1></div>
                <div className="question">{this.props.data.question}</div>
                {
                    this.props.data.options.map((number, i) => 
                    <QuestionOption 
                        key = {i}
                        option = {this.props.data.options[i]}
                    />)
                }
            </div>

        );
    }
}

export default Questions;
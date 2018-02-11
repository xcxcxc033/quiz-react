import React, { Component }  from 'react';
import { setAnswer } from '../../redux/index.redux';
import { connect } from 'react-redux';
import './questions.css';
class QuestionOption extends Component{
    
    constructor(props){
        super(props);
        // this.state = {
        //     activeIndex: null
        // }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){        
        let data ={
            index : this.props.index,
            answer : this.props.option
        }

        this.props.setAnswer(data);
    }

    render(){
        let answer = this.props.option;

        return(
            <div  
                className={ this.props.getAnswer[this.props.index] === answer ? "alert alert-danger" : "alert alert-warning"}
                onClick = { this.handleClick}
            >
                {answer}
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return{
        index: state.currentQuestion.curQuestion,
        getAnswer: state.currentAnswer
    }
}
export default connect(mapStatetoProps,{setAnswer})(QuestionOption);
// export default QuestionOption;
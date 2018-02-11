import React, { Component }  from 'react';
import Container from './../container/container';
import {goNext, goPre, setAnswer} from '../../redux/index.redux';
import { connect } from 'react-redux';
import data from './../../questions-file/file.json';
import FinalPanel from './../questions/final-panel';
import './css.css';

class  QuestionsEach extends Component {
    constructor(props){
        super(props);
        this.submitAnswers = this.submitAnswers.bind(this);
        this.state = {
            finishedQuize : false,
            units: 0,
            totalQuestions: 0,
            answered: 0,
        }
        // this.setState = this.setState.bind(this);

    }

    submitAnswers(){
        this.setState({finishedQuize : true});
        const numOfQuestion = data.length; 
        let answered = 0;
        let unit = 0;   
        for(let i = 0; i < numOfQuestion; i++){
            if(data[i].answer === this.props.currentAnswer[i]){
                unit += 1;
            }
            // console.log("answered", this.props.currentAnswer[i]);
            if(this.props.currentAnswer[i] !== undefined){
                answered ++;
            }
        }

        this.setState({
            units : unit,
            totalQuestions : numOfQuestion,
            answered : answered
        });

    }

    render(){

        let curData = data[this.props.currentQuestion];
        const numOfQuestion = data.length;        
        if(this.state.finishedQuize === false){
        return(
            <div className="container">
                
                <Container data = {curData} />
                <span className = "left-span">
                {this.props.currentQuestion === 0 ?
                    <button disabled className="disabled-btn" onClick={this.props.goPre}>No Privious Question</button>
                    : <button className="btn-pre" onClick={this.props.goPre}>Pre</button>
                }
                </span>
                <span className = "roght-span">
                {this.props.currentQuestion === numOfQuestion - 1 ?
                    <button className="btn-next" onClick={this.submitAnswers}>Submit</button>
                    : <button  className="btn-next" onClick={this.props.goNext}>Next</button>
                }
                </span>

            </div>
        );}
        else{
            return(
                <FinalPanel 
                    units = { this.state.units }
                    totalQuestions = { this.state.totalQuestions }
                    answered = { this.state.answered }
                    // data = { this.state }
                />
            )
        }
    }
}

const mapStatetoProps = (state) => {
    return{
        currentQuestion: state.currentQuestion.curQuestion,
        currentAnswer: state.currentAnswer
    }
}

QuestionsEach = connect(mapStatetoProps, {goNext, goPre, setAnswer})(QuestionsEach)


export default QuestionsEach;


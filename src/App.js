import React, { Component } from 'react';
import './css/App.css';
// import { connect } from 'react-redux';

// import Container from './components/container/container';
import QuestionsEach from './components/accessment/questions-data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: false
    }
    this.changeState = this.changeState.bind(this);
  }
  changeState(){
    this.setState({start: true})
  }

  render() { 
    return (
      <div>
        { this.state.start === true ? 
          <div className="App"><QuestionsEach /></div> : 
          <div className="startComponent">
            <div className="start-title">Are you ready to start quiz?</div>
            <button type="button" className="btn btn-success btn-lg" onClick={this.changeState}>
              <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Start
            </button>
          </div>
        }   
      </div>
    );
  }
}

export default App;

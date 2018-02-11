import Questions from './../questions/questions';
import React, { Component } from 'react';

class Container extends Component {

    render(){
        return(
            <div>
                <Questions data = {this.props.data}/>
            </div>

        );
    }
}


export default Container;
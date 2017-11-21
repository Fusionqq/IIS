import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import order from '../answers';
import qAndA from '../data';

class Home extends Component {
    
    state = {
        currentQ: 'question1',
        result: '',
    }

    onClickHandle = (e) => {
        const answerID = e.target.id;
        if (!qAndA[this.state.currentQ].answers[answerID].end) {
            this.setState({
                currentQ: order[this.state.currentQ][answerID],
            });
         } else {
            this.setState({
                result: order[this.state.currentQ][answerID],
            });
        }
    };

    refresh = () => {
        this.setState({
            currentQ: 'question1',
            result: '',
        })
    }

    render() {
        const buttonArr = [];
        for (const key in qAndA[this.state.currentQ].answers) {
            const element = qAndA[this.state.currentQ].answers[key].value;
            buttonArr.push(
                <button className="buttonAnswer" id={key} onClick={this.onClickHandle}>{element}</button>
            )
        };
        if (this.state.result) {
            return (
                <div>
                    <h1 className="title">
                        Ваш музыкант: {this.state.result}
                    </h1>
                    <button className="button" onClick={this.refresh}>Try again!</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className="title">
                        {qAndA[this.state.currentQ].title}
                    </h1>
                    <div className="buttonPanel"> 
                        {buttonArr}
                    </div>
                </div>
            );
        }
    }
}

export default Home;
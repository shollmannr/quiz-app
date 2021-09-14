import React, { Component } from 'react'
import { QuizData } from "./QuizData"
import './Quiz'

export class Results extends Component {

    render() { const { question, options, currentIndex, userAnswer, quizEnd } = this.state //get the current state

        if (quizEnd) {
            return (
                <div>
                    <h1>Game Over. Final score is {this.state.score} points</h1>
                    <p>The correct Answers for the quiz are</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className='ui floating message options'
                                key={index}>
                                {item.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <h2>{question}</h2>
                <span>{'Question ${currentIndex + 1} of ${QuizData.length}'}</span>
                {
                    options.map(option =>
                        <p key={option.id} className={'options ${userAnswer === option? "selected" : null}'}
                            onClick={() => this.checkAnswer(option)}>
                            {option}
                        </p>
                    )
                }


                {currentIndex < QuizData.length - 1 &&
                    <button disabled={this.state.disabled} onClick={this.nextQuestionHander}>
                        Next Question
                    </button>}
                {currentIndex === QuizData.length - 1 &&
                    <button onClick={this.finishHandler} disabled={this.state.disabled}>
                        Finish
                    </button>}
            </div>
        )
    }


    // responds to the click of the finish button
    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }
}

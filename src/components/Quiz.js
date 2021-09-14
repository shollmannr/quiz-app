import React, { Component } from 'react'
import { QuizData } from './QuizData';
import './Results.js'

export class Quiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userAnswer: null, //current users answer
            currentIndex: 0,  //current questions index
            options: [],     //the four options
            quizEnd: false,  //determines if it's the last question
            score: 0,        //holds the score
            disabled: true   // determines the status of the buttons

        }
    }

    //Component that holds the current quiz
    loadQuiz = () => {
        const { currentIndex } = this.state; //get the current question index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        })
    }

    nextQuestionHander = () => {
        const { userAnswer, answer, score } = this.state


        //Check if correct answer and increment score

        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }

    //Check the answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex != prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            });
        }
    }
}

export default Quiz

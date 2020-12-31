import React, { useState } from 'react';
// Components
import QuestionCard from './components/QuestionCard'
import {fetchQuestions} from './API'
// Types
import {Difficulty} from './API'

const TOTAL_QUESIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  fetchQuestions(TOTAL_QUESIONS, Difficulty.EASY);
  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }
  return (
    <div className="App">
      Quiz
      <h1>The Quizening</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score: </p>
      <p>Loading questions</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>

    </div>
  );
}

export default App;

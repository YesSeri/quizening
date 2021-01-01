import React, { useState } from 'react';
// Components
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './API';
// Types
import { QuestionState, Difficulty } from './API';
// CSS
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

		setQuestions([...newQuestions]);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (!gameOver) {
			const answer = e.currentTarget.value;
			const correctAnswer = questions[number].correct_answer;
			const correct = correctAnswer === answer;
			if (correct) setScore((prev) => prev + 1);
			const answerObject: AnswerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
			console.log(userAnswers);
		}
	};
	const nextQuestion = () => {
		const nextQuestionNumber: number = number + 1;

		if (nextQuestionNumber === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestionNumber);
		}
	};
	return (
		<>
			<GlobalStyle />
			<div className="App">
				Quiz
				<h1>The Quizening</h1>
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<button className="start" onClick={startTrivia}>
						Start
					</button>
				) : null}
				{!gameOver ? <p className="score">Score: {score}</p> : null}
				{loading && <p>Loading questions</p>}
				{!loading && !gameOver && (
					<QuestionCard
						questionNumber={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answer}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						callback={checkAnswer}
					/>
				)}
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</div>
		</>
	);
};

export default App;

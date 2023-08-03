import React, { useState } from 'react';

export default function App() {
	const questions = [
    {
			questionText: 'Which company introduced react?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Facebook', isCorrect: true },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
    {
			questionText: 'What are total number of bits used by IPV6 address?',
			answerOptions: [
				{ answerText: '64 bit', isCorrect: false },
				{ answerText: '128 bit', isCorrect: true },
				{ answerText: '256 bit', isCorrect: false },
				{ answerText: '32 bit', isCorrect: false },
			],
		},

		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
    {
			questionText: 'Identify the language which is mainly used for Artificial Inteeligence',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'J2EE', isCorrect: false },
				{ answerText: 'Prolog', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    {
			questionText: 'Why is firewall used in a computer?',
			answerOptions: [
				{ answerText: 'Monitoring', isCorrect: false },
				{ answerText: 'DataTransmission', isCorrect: false },
				{ answerText: 'Authentication', isCorrect: false },
				{ answerText: 'Security', isCorrect: true },
			],
		},
    {
			questionText: 'how many levels are there in the architecture of the database?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},
    {
			questionText: 'What is the port number of FTP?',
			answerOptions: [
				{ answerText: '23', isCorrect: false },
				{ answerText: '21', isCorrect: true },
				{ answerText: '110', isCorrect: false },
				{ answerText: '143', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
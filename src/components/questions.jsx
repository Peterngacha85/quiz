import React, { useState, useEffect } from 'react';
import "../components/global.css";
import QuizData from '../quiz-api.json';

const Questions = ({ scores, setScores }) => {



  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [next, setNext] = useState(0);
  const [number, setNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
  
  const handleNextAfterTimeout = () => {
    setNext(next + 1);
    setNumber(number + 1);
    setSelectedOption(null); // Reset the selected option when moving to the next question
    if (number > 85) {
      refreshPage();
    }
  }

  const handleNext = () => {
    setTimeout(handleNextAfterTimeout, 1500)
   
  };
  const handleNextWithoutTimeout = () =>{
    setNext(next + 1);
    setNumber(number + 1);
    setSelectedOption(null); // Reset the selected option when moving to the next question
    if (number > 85) {
      refreshPage();
    }
  }
  const currentQuestion = QuizData.quiz[next];
  const handleChoices = (option) => {
   

    if (currentQuestion.correctAnswer === option) {
      console.log("Choice is correct", option);
      setScores(scores + 5); // Increment the score for a correct answer
      console.log("Score", scores);
    } else {
      console.log("Choice is not correct!!!");
    }

    setSelectedOption(option); // Set the selected option when an option is clicked
  };

  useEffect(() => {
    fetch('quiz-api.json')
      .then(response => {
        if (QuizData && QuizData.quiz && QuizData.quiz.length > 0) {
          setQuestion(QuizData.quiz[next].question);
          setOptions(QuizData.quiz[next].options);
        }
      })
  }, [next]);

  // Function to refresh the page if needed
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className='quiz-div'>
        <div className='quiz-number'>
          <h4>{number}.</h4>
        </div>
        <div className='quiz'>
          <h3>{question}</h3>
        </div>
      </div>
      <div className='choices'>
        <ol className='alphabet-list'>
          <li>
            {options.map((option, index) => (
              <button
              
              onClick={() => {
                handleChoices(option);
                handleNext();
              }}
                key={index}
                className={`btn-choice ${selectedOption === option ? (currentQuestion.correctAnswer === option ? 'correct-answer' : 'incorrect-answer') : ''}`}
              >
                {option}
              </button>
            ))}
          </li>
        </ol>
      </div>
      <div className='next-btn'>
        <button className='next' onClick={handleNextWithoutTimeout}>NEXT</button>
      </div>
    </>
  )
}

export default Questions;

import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Card from './components/Card';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0); // Track the current card index
  const [isQuestion, setIsQuestion] = useState(true); // Track if we're showing the question or answer
  const [quizStarted, setQuizStarted] = useState(false); // Track if the quiz has started
  const [userGuess, setUserGuess] = useState(''); // Track the user's input
  const [feedback, setFeedback] = useState(null); // Track the feedback for user input
  
  // Flashcard data (array of objects with question-answer pairs)
  const cards = [
    { question: "What is the main language used to style websites? ", answer: "CSS" },
    { question: "What is the primary language used to create websites?", answer: "HTML" },
    { question: "What is the brain of a computer called?", answer: "CPU" },
    { question: "What do you call the storage where files are saved?", answer: "Memory" },
    { question: "What is the name of the operating system made by Microsoft? ", answer: "Windows" },
    { question: "What is the short term for a web address?", answer: "URL" },
    { question: "What does \"AI\" stand for in tech?", answer: "Artificial Intelligence" },
    { question: "What is the largest search engine?", answer: "Google" },
    { question: "What language is mainly used for iOS app development?", answer: "Swift" },
    { question: "What do you call a flaw in a program?", answer: "Bug" },
  ];

  // Function to handle card flip
  const flipCard = () => {
    setIsQuestion(!isQuestion);
    setFeedback(null); // Reset feedback when card is flipped
  };

  // Function to handle next random card
  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(randomIndex);
    setIsQuestion(true); // Reset to show the question first
    setUserGuess(''); // Reset the user's guess
    setFeedback(null); // Reset feedback
  };

  // Function to handle navigating to the next card in sequence
  const nextSequentialCard = () => {
    setCurrentCard((currentCard + 1) % cards.length);
    setIsQuestion(true); // Reset to show the question first
    setUserGuess(''); // Reset the user's guess
    setFeedback(null); // Reset feedback
  };

  // Function to handle navigating to the previous card in sequence
  const previousSequentialCard = () => {
    setCurrentCard((currentCard - 1 + cards.length) % cards.length);
    setIsQuestion(true); // Reset to show the question first
    setUserGuess(''); // Reset the user's guess
    setFeedback(null); // Reset feedback
  };

  // Start the quiz when "Start!" is clicked
  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Function to handle user input change
  const handleUserGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  // Function to handle submitting the user's guess
  const handleSubmitGuess = () => {
    const isCorrect = userGuess.trim().toLowerCase() === cards[currentCard].answer.toLowerCase();
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect.');
  };

  return (
    <div className="app">
      <h1>The Ultimate Tech Quiz!</h1>
      <p>How well do you know your tech basics? Test your knowledge on essential tech terms and concepts!</p>
      <p>Number of cards: {cards.length}</p>

      {/* Conditionally show the "Start!" card or the flashcards */}
      {quizStarted ? (
        <>
          <Card card={cards[currentCard]} isQuestion={isQuestion} flipCard={flipCard} />
          <div className="user-input">
            <input
              type="text"
              value={userGuess}
              onChange={handleUserGuessChange}
              placeholder="Place your answer here..."
            />
            <button onClick={handleSubmitGuess}>Submit Guess</button>
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
          <div className="navigation-buttons">
            <button onClick={previousSequentialCard}>←</button>
            <button onClick={nextSequentialCard}>→</button>
            <Navigation nextCard={nextCard} />
          </div>
        </>
      ) : (
        <div className="start-card" onClick={startQuiz}>
          <h2>Start!</h2>
        </div>
      )}
    </div>
  )
}

export default App
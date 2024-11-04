/* eslint-disable react/prop-types */

const Card = ({ card, isQuestion, flipCard }) => {
    return (
      <div className="card" onClick={flipCard}>
        <h2>{isQuestion ? card.question : card.answer}</h2>
      </div>
    );
  };
  
  export default Card;
  
import React, { useState, useEffect } from 'react';
import './Game.css'; // Importing CSS file

const Game = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const[result,setResult]=useState(false)
  const[highScore,setHighScore]=useState(false)

  useEffect(() => {
    //displayKeyword
    const displayKeyword = () => {
      const randomIndex = Math.floor(Math.random() * 9);
      const updatedBoxes = [...boxes];
      updatedBoxes[randomIndex] = true;
      setBoxes(updatedBoxes);

      setTimeout(() => {
        updatedBoxes[randomIndex] = false;
        setBoxes(updatedBoxes);
      }, 1000);
    };

    // Timer
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(prevTime => prevTime - 1);
      } else {
        clearInterval(timer);
        clearInterval(keywordInterval);
        setResult(true)
        if(localStorage.getItem("highscore")){
          if(localStorage.getItem("highscore")<score){
            localStorage.setItem("highscore",score)
            setHighScore(true)
          }
        }else{
          localStorage.setItem("highscore",score)
          setHighScore(true)
        }
      }
    }, 1000);

    // display keywords every 1 second
    const keywordInterval = setInterval(() => {
      displayKeyword();
    }, 1000); 

    return () => {
      clearInterval(timer);
      clearInterval(keywordInterval);
    };
  }, [boxes, score, timeLeft]);

  //Restart Function
  const handleRestart=()=>{
    setTimeLeft(60);
    setScore(0)
    setResult(false)
    setHighScore(false)
  }

  // handling the score
  const handleClick = (index) => {
    if (boxes[index]) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  return (
    <div className="game-container">
      <div className="game-box-container">
      {boxes.map((hasKeyword, index) => (
        <div
          key={index}
          className={`game-box ${hasKeyword ? 'game-highlight' : ''}`}
          onClick={() => handleClick(index)}
        >
          {hasKeyword && 'HIT'}
        </div>
      ))}
     </div>

     <div className="game-score-timer">
        <div>Score: {score}</div>
        <div>Time Left: {timeLeft} seconds</div>
        {localStorage.getItem("highscore")?<div>High Score : {localStorage.getItem("highscore")}</div>
        :""}
      </div>
     {result&result? <div className='game-result'>
     <h2>{`Game Over! Your final score is ${score}`}</h2>
     {highScore?<h3>{`Brilliant Job! Now You are leading the leaderboard`}</h3>:""}
     <button type="reset"
     className='game-reset-btn'
     onClick={handleRestart}>Restart</button>
      </div>:""}
    </div>
  );
};

export default Game;

import React, { useState } from 'react'
import TotalScore from './TotalScore';
import SelectNumber from './SelectNumber';
import RoleDice from './RoleDice';
import { Button } from 'react-bootstrap';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [errorSelectNumber, setErrorSelectNumber] = useState('');
  const [resetScore, setResetScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(4);
  const [rules, setRules] = useState(false)
  const generateRandomNumber= (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const rollDice = () => {
    if(!selectedNumber) {
      setErrorSelectNumber("You need to select a number");
      return;
    };
    setErrorSelectNumber("");
      const randomNum = generateRandomNumber(1,7);
      setCurrentDice((prev) => randomNum);
      if(selectedNumber === randomNum) {
        setScore((prev) => prev + randomNum);
      } else {
        setScore((prev) => 
          prev - 2
        )
      }
      setSelectedNumber(undefined)
  }

  const handleResetScore = () => {
    setScore(0);
    setSelectedNumber(undefined)
  }
  const showRules = () => {
    setRules(!rules)
  }

  return (
    <div className='container'>
      <div className='totalSelectNumWrap'>
        <TotalScore score={score} currentDice={currentDice} setCurrentDice={setCurrentDice} />
        <SelectNumber setErrorSelectNumber={setErrorSelectNumber} errorSelectNumber={errorSelectNumber} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

      </div>
      <div className='diceWrap'>
        <RoleDice currentDice={currentDice} rollDice={rollDice}  />
        <div className='rulesResetWrap'>
          <div className='btns'>
          <Button variant="danger" className='mb-3' onClick={handleResetScore}>Reset</Button>
          <Button variant="primary" onClick={showRules} className='mb-3'>Show Rules</Button>
          </div>
        {rules && 
        <div className='rulesDiceGame mb-5'>
          <h3>How to play dice game</h3>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
          <p>If you get wrong guess then  2 point will be dedcuted </p>
        </div>
        }
      </div>
      </div>
      
    </div>
  )
}

export default GamePlay;
import Button from 'react-bootstrap/Button';

import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='container'>
        <div className='diceGameWrapper d-flex align-items-center'>
            <div className='diceImg'>
                <img src='./images/dices.png' />
            </div>
            <div className='diceTextBtnWrap'>
                <h1>Dice Game</h1>
                <Button variant="dark" size="lg" onClick={toggle}>Play Now</Button>
            </div>
        </div>
    </div>
  )
}

export default StartGame
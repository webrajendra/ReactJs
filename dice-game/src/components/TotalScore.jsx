import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='text-center mt-3'>
        <h1>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}

export default TotalScore
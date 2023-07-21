
const RoleDice = ({currentDice, rollDice}) => {
   

  return (
    <div className="container">
      <div className="diceImgWrap">
        <div className="dice" onClick={rollDice}>
            <img src={`./images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to Roll</p>
      </div>
    </div>
  );
};

export default RoleDice;

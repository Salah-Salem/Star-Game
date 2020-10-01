import React from 'react';
import { utils } from '../utils';
import PlayNumbers from './PlayNumbers';
import DisplayStars from './DisplayStars';
import PlayAgain from './PlayAgain';
import { useGameState } from '../customHook';

export default function Game (props) {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 ? 'Won' : secondsLeft === 0 ? 'Lost' : 'Active';

  const numberStatus = (number) => {
    if(!availableNums.includes(number)){
      return 'used';
    }
    if(candidateNums.includes(number)){
      return candidatesAreWrong? 'wrong' : 'candidate' ;
    }
    return 'available';
  };

  const onNumberClick = (number , currentStatus) => {
    if(gameStatus !== 'Active' || currentStatus === 'used'){
      return ;
    }
    const newCandidateNums = 
    currentStatus === 'available' ?
    candidateNums.concat(number) :
    candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums);
  };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus !== 'Active' 
            ? <PlayAgain onClick={props.startNewGame} gameStatus = {gameStatus}/> 
            : <DisplayStars count={stars}/> }
          </div>
          <div className="right">
          {utils.range(1,9).map(number => 
            <PlayNumbers 
              key={number} 
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
              />
              )}
          </div>
        </div>
          <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };
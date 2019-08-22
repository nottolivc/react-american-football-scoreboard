//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setScoreHome] = useState(0);
const [awayScore, setScoreAway] = useState(0);
const [timer, setTimer] = useState(1000);

//add the functions for the buttons below to work
const homeTouchDown = () => {
  setScoreHome(homeScore + 7);
}
const homeFieldGoal = () => {
  setScoreHome(homeScore + 3);
}
const awayTouchDown = () => {
  setScoreAway(awayScore + 7);
}
const awayFieldGoal = () => {
  setScoreAway(awayScore + 3);
}
//setTimeout function for counting 
// setTimeout( () => {  
//    setTimer(timer - 1);
// }, 1000);

  // react hooks timer function useEffect
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimer(previousTime => { 
        if (previousTime > 0) { 
          setTimer(previousTime - 1);
        } 
      })
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);


return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}


//<button {homeScore = 0; awayScore = 0;}>Reset</button>
export default App;

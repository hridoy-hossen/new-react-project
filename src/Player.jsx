import React, { useState } from 'react';

const Player = () => {
    const [runs , setRuns] = useState(0);
    const hendleSingle = ()=>{
        const one = runs + 1 ;
        setRuns(one)
    }
    const hendleFore = ()=>{
        const fore = runs + 4 ;
        setRuns(fore)
    }
    const hendleSix = ()=>{
        const six = runs + 6 ;
        setRuns(six)
    }
    const hendleReset = ()=>{
        const zero = 0 ;
        setRuns(zero)
    }
    return (
        
        <div className='border-3 border-amber-200 p-3 m-2'>
            <h3>Player : Sakib Al Hasan</h3>
            {
                runs > 50 && <p>Your score is above 50</p>
            }
            {
                runs > 100 && <p>Your score is above 100</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={hendleSingle} className='btn btn-primary'>Single</button>
            <button onClick={hendleFore} className='btn btn-primary mx-2'>Four</button>
            <button onClick={hendleSix} className='btn btn-primary'>Six</button>
            <button onClick={hendleReset} className='btn btn-primary ms-2'>Reset</button>
        </div>
    );
};

export default Player;
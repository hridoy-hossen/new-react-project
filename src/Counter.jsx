import React, { useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0);
    const hendle=()=> {
        const newNum = count + 1 ;
        setCount(newNum)
    }
    const hendleDis=()=> {
        const decNum = count - 1 ;
        setCount(decNum)
    }
    const hendleResett = ()=>{
        const zero = 0 ;
        setCount(zero)
    }
    return (
        <div className='border-4 border-red-500 p-5 m-4'>
            <h1>hi</h1>
            <h3 className='my-2'>Reacts : {count}</h3>
            <button onClick={hendle} className='btn btn-primary'>Like</button>
            <button onClick={hendleDis} className='btn btn-primary mx-2'>DisLike</button>
            <button onClick={hendleResett} className='btn btn-primary ms-2'>Reset</button>
        </div>
    );
};

export default Counter;
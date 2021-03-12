import React from 'react';
import './Score.css';



function Score() {



    return (
        <>
            <div className='row  d-flex justify-conte nt-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <h1>Portrait Painting Matching Game</h1>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                    <h2>How Well Can Your Remeber These Faces?</h2>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                    <h2>Try not to select the same one twice!</h2>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                    <p className="topScore"> Top Score: {props.topScore}</p>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                <p className="score">Score: {props.score}</p>
                </div>
            </div>


        </>
    );
}

export default Score;
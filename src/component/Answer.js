import React from 'react';

const Answer = ({data}) => {
    const {question,options,correctAnswer}= data
   console.log(data)
   
    return (
        <div className='border'>
           <p>{question}</p>
           <h2 className='bg-red-700'>{correctAnswer}</h2>
           <div>
            
                <ul> 
                    {options.map(option=><li>{option}</li>)}
                </ul>
               
            
           </div>


        </div>
    );
};

export default Answer;
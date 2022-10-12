import React from 'react';

const Answer = ({data}) => {
    const {question,options}= data
   console.log(data)
   
    return (
        <div className='border'>
           <p>{question}</p>
           <div>
            
                <ul> 
                    {options.map(option=><li>{option}</li>)}
                </ul>
               
            
           </div>


        </div>
    );
};

export default Answer;
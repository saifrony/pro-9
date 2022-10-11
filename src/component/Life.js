import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from './Answer';

const Life = () => {
    const data= useLoaderData();
    
    


   
    return (
        <div>
            {
                data.map(answer=><Answer key={answer.id} answer={answer}></Answer>)
            }
        </div>
    );
};

export default Life;
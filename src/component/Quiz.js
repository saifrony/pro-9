import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart';


const Quiz = () => {
   const lod= useLoaderData();
   const quizes=lod.data;
  
   
  
   
    return (
        <div>
        {/* <h2>ji:{quizes.length}</h2> */}
        {
            quizes.map(quiz=><Chart key={quiz.id} quiz={quiz}></Chart>)
        }

        

        </div>
    );
};

export default Quiz;
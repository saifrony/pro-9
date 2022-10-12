import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from './Answer';

const Life = () => {
    const datas= useLoaderData();
    const answers=datas.data.questions;

    // console.log(answers)
    
    
   
    return (
        <div>
            <h2>hi</h2>
            {
                answers.map(data=><Answer key={data.id} data={data}></Answer>)
            } 
        </div>
    );
};

export default Life;
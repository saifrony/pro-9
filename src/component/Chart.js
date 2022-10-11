import React from 'react';
import { Link } from 'react-router-dom';



const Chart = ({quiz}) => {
    const {logo, name,total,id} = quiz;
    return (
        <div className='flex'>
      <div className=' bg-blue-200 p-6 rounded shadow-lg '>
    
            <img alt='' className='w-100 h-56 mb-6 rounded shadow-lg md:h-64' src={logo} />
                <div className='bg-red-900 flex justify-around items-center	'>
                <h6  className='mb-2 text-xl leading-none sm:text-2xl'>{total}</h6>
                <h3 className='mb-2 text-xl font-bold leading-none sm:text-2xl text-white'>{name}</h3>
                <div className='flex '>
                <Link to={`/quiz/${id}`}>
                <button  className='bg-blue-500 p-3 rounded'>Click</button>
                </Link>
                </div>
               
                </div>
            
    </div>
    </div>






    );
};

export default Chart;
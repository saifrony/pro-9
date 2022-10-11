import React from 'react';
import Quiz from './Quiz';

const Home = () => {
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			<span className="block mb-2 dark:text-violet-400">Ronson Quiz system</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Build your Knowledge </h1>
			<p className="my-8">
            knowledge of the history of Bangladesh, and the ideals of the Greatest Bengali of a Thousand years, we invite you to participate in the “Ronson Quiz”. Showcase your knowledge and stand a chance to great prizes every day.
			</p>
			
				
				<button type="button" className="w-full bg-green-300 py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Learn more</button>
			
		</div>
		<img src="../1.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>

        </div>
		
    );
};

export default Home;
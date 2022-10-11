import React from 'react';

const Question = () => {
    return (
        <div>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="divide-y divide-gray-700">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is the purpus of React Router?</h3>
				<p className="md:pl-0 md:col-span-7">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">How does context API works?</h3>
				<p className="md:pl-0 md:col-span-7">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">How to work Useref hook?</h3>
				<p className="md:pl-0 md:col-span-7">useRef() hook creates references. Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current : you can use this property to read the reference value reference. current , or update reference.</p>
			</div>
			
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Question;
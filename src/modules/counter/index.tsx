import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CounterPage = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};
	return (
		<div>
			<h1>{counter}</h1>
			<Button onClick={increment}>Add Number</Button>
		</div>
	);
};

export default CounterPage;

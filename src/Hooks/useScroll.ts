import { useState, useEffect } from 'react';

const useScroll = () => {
	// setting initial value to true
	const [scroll, setScroll] = useState(window.scrollY);

	// running on mount
	useEffect(() => {
		const onScroll = () => {
			setScroll(window.scrollY);
		};

		// setting the event handler from web API
		document.addEventListener('scroll', onScroll);

		// cleaning up from the web API
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, [setScroll]);

	return scroll;
};
export default useScroll;

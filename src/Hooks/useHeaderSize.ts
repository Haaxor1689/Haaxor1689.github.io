import { useLayoutEffect, useState } from 'react';

import useScroll from './useScroll';

const useHeaderSize = () => {
	const scroll = useScroll();
	const [height, setHeight] = useState(1);
	useLayoutEffect(() => {
		setHeight(
			document.getElementById('PAGE_HEADER')?.getBoundingClientRect().height ??
				0,
		);
	}, []);

	const isScrolledToTop = scroll < height;
	return { height, isScrolledToTop, scroll };
};
export default useHeaderSize;

import { useEffect } from 'react';

import Portfolio from 'Portfolio';

const usePageTitle = (title?: string) => {
	useEffect(() => {
		document.title = title
			? `${title} - ${Portfolio.biography.name}`
			: Portfolio.biography.name;
	}, [title]);
};
export default usePageTitle;

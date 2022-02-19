import { useEffect, useState, useCallback } from 'react';

/*
	Hook that checks if a media query is honoured in component code
*/

export const useMediaQuery = (width, underOrOver) => {
	const [targetReached, setTargetReached] = useState(false);
	let minOrMax = 'max';

	if (underOrOver === 'over') {
		minOrMax = 'min';
	}

	if (underOrOver === 'under') {
		minOrMax = 'max';
	}

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(${minOrMax}-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
};
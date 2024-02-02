import { type MutableRefObject, useEffect } from 'react';

export default function useIntersectionObserver<T>(
	element: MutableRefObject<T | undefined>,
	classString: string
) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries[0].target.classList.toggle(
					classString,
					entries[0].isIntersecting
				);
			},
			{ threshold: 0.5 }
		);

		if (element.current) {
			observer.observe(element.current as unknown as Element);
		}
		return () => {
			if (element.current) {
				observer.unobserve(element.current as unknown as Element);
			}
		};
	}, []);
}

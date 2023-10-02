import { MutableRefObject, useEffect } from 'react';

export default function useIntersectionObserver<T>(
	element: MutableRefObject<T | undefined>,
	classString: string
) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					entries[0].target.classList.add(classString);
				} else {
					entries[0].target.classList.remove(classString);
				}
			},
			{
				threshold: 0.5,
			}
		);

		if (element.current) {
			observer.observe(element.current as unknown as Element);
		}
		return () => {
			if (element.current) {
				observer.unobserve(element.current as unknown as Element);
			}
		};
	}, [element]);
}

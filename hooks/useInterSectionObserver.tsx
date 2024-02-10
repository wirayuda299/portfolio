import { useEffect, useRef, MutableRefObject } from 'react';

interface Options {
	root?: Element;
	rootMargin?: string;
	threshold?: number | number[];
}

export default function useIntersectionObserver<T extends HTMLElement>(
	element: MutableRefObject<T | null>,
	stylesString: string,
	options: Options = {}
) {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (!element.current) return;

		if (!observer.current) {
			observer.current = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add(stylesString);
						} else {
							entry.target.classList.remove(stylesString);
						}
					});
				},
				{
					...options,
					threshold: options.threshold || 0.5,
					rootMargin: options.rootMargin || '100px',
				}
			);
		}

		observer.current.observe(element.current);

		return () => {
			if (observer.current && element.current) {
				observer.current.unobserve(element.current);
			}
		};
	}, [element, stylesString, options]); // Add options to the dependency array
}

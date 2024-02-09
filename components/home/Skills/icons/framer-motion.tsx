export default function FramerMotion() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='none'>
			<path d='M50 0V25L25 50L12.5 37.5L25 25L50 0Z' fill='#59529d' />
			<path d='M50 25V50L37.5 37.5L50 25Z' fill='#5271b4' />
			<path d='M25 25L0 50V0l25 25z' fill='#bb4b96' />
			<defs>
				<clipPath>
					<path fill='#fff' d='M0 0h50v50H0z' />
				</clipPath>
			</defs>
		</svg>
	);
}

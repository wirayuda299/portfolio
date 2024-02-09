export function NextIcon({ color }: { color: string }) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='#000'>
			<path
				d='M5 12h14m0 0l-7-7m7 7l-7 7'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

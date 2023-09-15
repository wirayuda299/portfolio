export default function ProjectInfoLabel({
	label,
	value,
}: {
	label: string;
	value: string;
}) {
	return (
		<div className='max-w-[200px]'>
			<h2 className='text-sm font-semibold text-white-500'>{label}</h2>
			<p className='pt-2 text-xl font-semibold dark:text-white'>{value}</p>
		</div>
	);
}

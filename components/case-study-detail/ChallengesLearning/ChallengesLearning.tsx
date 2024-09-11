import Content from './Content';

type ChallengesLearningProps = {
	challenges: string[];
	learnings: string[];
};

export default function ChallengesLearning({
	challenges,
	learnings,
}: ChallengesLearningProps) {
	return (
		<section className='bg-black-200'>
			<div className='mx-auto flex max-w-880 flex-col gap-5 px-3 py-10'>
				<p className='text-sm font-semibold text-primary-light'>Problem</p>
				<h2 className='text-2xl font-semibold text-white'>
					Challenges & Learnings
				</h2>
				<Content
					title='Challenges'
					image='/assets/icons/challenge.svg'
					contents={challenges}
				/>
				<Content
					title='Learnings'
					image='/assets/icons/check.svg'
					contents={learnings}
				/>
			</div>
		</section>
	);
}

import Logo from './Logo';
import NavContainer from './NavContainer';

export default function Navbar() {
	return (
		<nav className='sticky top-0 z-50 mx-auto flex max-w-1400 items-center backdrop-blur-sm md:bg-opacity-50'>
			<div className='relative flex w-full items-center justify-between gap-x-5 p-5 md:p-6 lg:px-11'>
				<Logo />
				<NavContainer />
			</div>
		</nav>
	);
}

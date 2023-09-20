import Logo from './Logo';
import NavContainer from './NavContainer';

export default function Navbar() {
	return (
		<nav className='top-0 mx-auto flex max-w-1400 items-center md:sticky md:z-50 md:bg-opacity-50 md:backdrop-blur-sm'>
			<div className='relative flex w-full items-center justify-between gap-x-5 p-5 md:p-6 lg:px-10'>
				<Logo />
				<NavContainer />
			</div>
		</nav>
	);
}

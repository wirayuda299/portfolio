import Logo from './Logo';
import NavContainer from './NavContainer';

export default function Navbar() {
	return (
		<nav className='flex items-center md:sticky top-0 z-10 md:backdrop-blur '>
			<div className='w-full p-5 md:p-6 relative gap-x-5 flex justify-between items-center'>
				<Logo />
				<NavContainer />
			</div>
		</nav>
	);
}

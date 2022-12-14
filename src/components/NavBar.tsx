import GUHLogo from '../assets/guh.svg';

const NavBar = (): JSX.Element => {
	return (
		<nav className='bg-guh-orange flex items-center justify-between py-4 lg:px-32'>
			<img src={GUHLogo} className='mx-auto md:mx-0 align-center h-20' />
			<ul className='hidden md:flex flex-row items-baseline space-x-16 text-xl font-medium'>
				<li>
					<a className='hover:border-b-2 border-black' href='#about'>
						About
					</a>
				</li>
				<li>
					<a className='hover:border-b-2 border-black' href='#faqs'>
						FAQ
					</a>
				</li>
				<li>
					<a className='hover:border-b-2 border-black' href='#sponsors'>
						Sponsors
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

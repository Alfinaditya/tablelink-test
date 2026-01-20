import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { links } from './navLinks';

const Navbar = () => {
	return (
		<nav className="border-b bg-muted/40 backdrop-blur-lg sticky top-0 z-50">
			<div className="container mx-auto flex h-14 items-center px-4">
				<div className="mr-8 hidden md:flex">
					<Link
						to="/"
						className="mr-6 flex items-center space-x-2 font-bold"
					>
						<span>TableLink Test</span>
					</Link>
					<div className="flex gap-6 text-sm font-medium">
						{links.map((item) => (
							<NavLink
								key={item.href}
								to={item.href}
								className={({ isActive }) =>
									cn(
										'transition-colors hover:text-foreground/80',
										isActive
											? 'text-foreground'
											: 'text-foreground/60',
									)
								}
							>
								{item.label}
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

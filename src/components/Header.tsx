import Image from "next/image";
import logo from "../../public/user-logo.png";
import SearchForm from "./SearchForm";
import ActiveLink from "./ActiveLink";

function Header() {
	return (
		<>
			<div className='min-h-full '>
				<nav className='z-10 bg-gray-400'>
					<div className='mx-24 max-[640px]:mx-6 min-[320px]:py-6 max-w-full px-4 sm:px-6 lg:px-8'>
						<div className='flex min-[320px]:gap-y-5 lg:flex-row min-[320px]:flex-col h-full items-center justify-between'>
							<div className='flex items-center  min-[320px]:flex-col basis-60 items-baseline'>
								<div className='flex-shrink-0'>
									<Image
										width={800}
										height={500}
										className='h-16 w-16'
										src={logo.src}
										alt='user-logo'
									/>
								</div>
							</div>
							<SearchForm />

							<div className=''>
								<div className=' flex items-baseline space-x-4'>
									<ActiveLink to='/'>Home</ActiveLink>
									<ActiveLink to='/users/1'>Users List</ActiveLink>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default Header;

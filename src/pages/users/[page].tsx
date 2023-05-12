import { IUser } from "@/interfaces/IUser";
import Link from "next/link";
import { GetServerSideProps } from "next/types";
import Image from "next/image";

// interface UsersProps {
// 	data: {
// 		Users: IUser[];
// 	};
// 	query: { name: string };
// }

type Props = {
	params: {
		page: string;
	};
};

const ListUserPage = ({ params: { page } }: Props) => {
	console.log(page);
	// const { Users } = data;
	return (
		<>
			{/* <ul className='flex justify-center  max-[640px]:mx-6 min-[320px]:h-ful mt-20 my-gap  mx-24 max-w-full flex-wrap gap-y-14 gap-x-4'>
				{Users.map((el, index) => (
					<li
						className='flex flex-col 2xl:my-flex-basis xl:my-flex-basis md:my-flex-basis-xl'
						key={index}>
						<Link href={`/film/${el.id}`}>
							<Image width={300} height={444} src={el.image} alt='poster' />
							<div className=''>
								<p>{el.firstName}</p>
								<p>{el.maidenName}</p>
								<p>{el.lastName}</p>
							</div>
						</Link>
					</li>
				))}
			</ul> */}
		</>
	);
};

export const getStatic: GetServerSideProps<{
	data: UsersProps;
}> = async ({ query }) => {
	const res = await fetch(
		`ttps://dummyjson.com/users?limit=10&skip=" + ${query.name} + "0"`
	);
	const data: any = await res.json();
	console.log("dsdsds");

	return {
		props: {
			data,
			query,
		},
	};
};

export default ListUserPage;

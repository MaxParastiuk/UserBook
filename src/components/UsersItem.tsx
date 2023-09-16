import { IUser } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type UsersItemProps = {
  user: IUser;
};

export const UsersItems = ({ user }: UsersItemProps) => {
  return (
    <li
      className="flex 2xl:basis-[18.4%] xl:basis-[23.5%] min-[950px]:basis-[32%] md:basis-[49%] max-[380px]:basis-[100%] flex-col  bg-gray-300
        md:basis-80"
    >
      <Link href={`/user/${user.id}`}>
        <Image width={300} height={444} src={user.image} alt="poster" />
        <div className="">
          <p className="text-center my-5 font-lemon text-blue-500">
            {user.firstName} {user.maidenName} {user.lastName}
          </p>
        </div>
      </Link>
    </li>
  );
};

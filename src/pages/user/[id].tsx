import { IUser } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

type UserProps = {
  data: IUser;
};

const UserPage = ({ data }: UserProps) => {
  const {
    firstName,
    maidenName,
    lastName,
    age,
    gender,
    birthDate,
    email,
    image,
    phone,
    address,
  } = data;

  return (
    <>
      <div className=" xl:h-screen min-[320px]:flex-col max-[640px]:mx-6 min-[320px]:h-full mx-24 gap-x-14  xl:flex-row px-4 sm:px-6 lg:px-8  flex  m-16  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          width={800}
          height={500}
          className="md:w-8/12 max-w-md sm:self-center xl:self-auto h-4/6 p-8 rounded-t-lg"
          src={image}
          alt="product image"
        />

        <div
          className="p-8 flex flex-col  gap-y-6
			"
        >
          <div className="min-[320px]:text-center xl:text-left">
            <h5 className=" text-3xl max-[640px]:text-2xl  font-semibold tracking-tight text-gray-900 dark:text-white">
              {firstName + ' ' + maidenName + ' ' + lastName}
            </h5>
            <p className="text-2xl max-[640px]:text-xl my-2">
              Birth Date: <span className="text-gray-600">{birthDate}</span>
            </p>
            <p className="text-2xl max-[640px]:text-xl my-2">
              Age: <span className="text-gray-600">{age}</span>
            </p>
            <p className="text-2xl max-[640px]:text-xl my-2">
              Gednder: <span className="text-gray-600">{gender}</span>
            </p>
            <p className="text-2xl max-[640px]:text-xl my-2">
              Email: <span className="text-gray-600">{email}</span>{' '}
            </p>
            <p className="text-2xl max-[640px]:text-xl my-2">
              Phone: <span className="text-gray-600">{phone}</span>
            </p>
          </div>

          <div className="flex min-[320px]:gap-y-7 max-[1280px]:items-center  min-[320px]:flex-col  justify-between  ">
            <span className="max-[640px]:text-xl  text-2xl font-bold text-gray-900 dark:text-white">
              Address : {address.address}
            </span>
            <span className="max-[640px]:text-xl  text-2xl font-bold text-gray-900 dark:text-white">
              City : {address.city}
            </span>
            <span className="max-[640px]:text-xl  text-2xl font-bold text-gray-900 dark:text-white">
              State : {address.state}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: UserProps;
}> = async ({ query }) => {
  const res = await fetch(`https://dummyjson.com/users/${query.id}`);
  const data: UserProps = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default UserPage;

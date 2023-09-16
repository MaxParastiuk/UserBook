import Pagination from '@/components/Pagination';
import { UsersItems } from '@/components/UsersItem';
import { IUser } from '@/types';
import { GetServerSideProps } from 'next/types';

type UsersProps = {
  data: {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
  };
  query: { page: string };
};

const ListUserPage = ({ data, query }: UsersProps) => {
  const { users, limit, total } = data;

  return (
    <>
      {users ? (
        <div className="bg-yellow-50">
          <ul className="flex justify-center  max-[640px]:mx-6 min-[320px]:h-ful p-20 my-gap  max-w-full flex-wrap gap-y-14 gap-x-4">
            {users.map((el) => (
              <UsersItems key={el.id} user={el}></UsersItems>
            ))}
          </ul>
          <Pagination
            totalResult={total}
            limit={limit}
            currentPage={query.page}
          />
        </div>
      ) : (
        <h1>Error</h1>
        // <Error404 />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: UsersProps;
}> = async ({ query }) => {
  const res = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${query.page}0`,
  );
  const data: UsersProps = await res.json();

  return {
    props: {
      data,
      query,
    },
  };
};

export default ListUserPage;

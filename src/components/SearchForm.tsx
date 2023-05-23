import { IUser } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type dataProps = {
  users: IUser[];
};

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${inputValue}`,
        );
        const usersData: dataProps = await response.json();
        setUsers(usersData.users);
      } catch (error) {
        console.error('Ошибка при получении пользователей:', error);
      }
    };

    fetchUsers();
  }, [inputValue]);

  return (
    <form className="relative">
      <input
        type="search"
        name="search"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Enter user name"
        onChange={(event) => setInputValue(event.target.value)}
      />
      {inputValue.length > 0 && (
        <div className="absolute top-full w-full bg-white border border-gray-300 rounded-b-md shadow-lg">
          <ul className="py-2">
            {users.map((user) => (
              <li
                key={user.id}
                onClick={() => {
                  router.push(`user/${user.id}`);
                }}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                {user.firstName + ' ' + user.maidenName + ' ' + user.lastName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchForm;

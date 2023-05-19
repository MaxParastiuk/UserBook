import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex bg-gray-800 min-h-screen flex-col items-center justify-between p-24">
      <div className="m-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="gap-5 flex flex-col  items-center justify-between">
          <h1 className="text-5xl font-bold text-blue-700 mb-4 font-lemon">
            Welcome to
          </h1>
          <h2 className="text-6xl font-extrabold text-gray-400 mb-8 font-lemon">
            User Book
          </h2>

          <Link
            className="m-14 p-2 rounded-sm bg-gray-200 text-2xl font-extrabold text-gray-700 mb-8 font-lemon hover:bg-gray-400 duration-300 hover:text-gray-900"
            href={'/users/1'}
          >
            Go to User List
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

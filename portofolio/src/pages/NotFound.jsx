import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">
      <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
        404 - Page Not Found
      </h2>
      <p className="mb-6 text-lg md:text-xl">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-cyan-400 text-white px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 hover:bg-cyan-500"
      >
        Go back home
      </Link>
    </div>
  );
}

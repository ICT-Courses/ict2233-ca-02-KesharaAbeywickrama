import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-5xl font-bold mb-6">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back home
      </Link>
    </div>
  );
}

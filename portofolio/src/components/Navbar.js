import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="space-x-6">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`hover:underline ${
              location.pathname === to ? 'font-semibold underline' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

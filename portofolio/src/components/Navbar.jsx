import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold"> Keshara Abeywickrama</div>
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
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-8 px-3 py-1 border rounded hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}
 

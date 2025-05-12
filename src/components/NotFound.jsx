import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-red-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-red-700">
          Page Not Found
        </p>
        <p className="mt-2 text-red-500">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-red-800 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

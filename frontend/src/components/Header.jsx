import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">CarDealership</Link>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/cars" className="text-gray-700 hover:text-blue-600">Cars</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Call Now</a>
          <a href="https://wa.me/1234567890" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
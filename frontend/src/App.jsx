import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CarListings from './components/CarListings';
import CarDetails from './components/CarDetails';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cars" element={<CarListings />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
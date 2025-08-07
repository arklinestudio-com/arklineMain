import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Load Google Font only for this component
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Wrap everything inside flex */}
        <div className="flex justify-between items-center py-6">
          {/* Logo + Title */}
        <div className="flex items-center gap-6">
  <img
  src="/Logo.svg"
  alt="Arkline Studio Logo"
  className="h-8 w-[6rem] object-contain scale-[2.0] ml-4"
/>
  <h1
    className="text-3xl not-italic text-gray-900"
    style={{
      fontFamily: '"Cairo Play", sans-serif',
    }}
  >
    Arkline Studio
  </h1>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+91 87588 64911"
              className="flex items-center text-sm text-gray-600 hover:text-amber-600"
            >
              <Phone className="h-4 w-4 mr-1" />
              +91 87588 64911
            </a>
            <a
              href="mailto:arklinestudio9@gmail.com"
              className="flex items-center text-sm text-gray-600 hover:text-amber-600"
            >
              <Mail className="h-4 w-4 mr-1" />
              arklinestudio9@gmail.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate(item.path);
                  }}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

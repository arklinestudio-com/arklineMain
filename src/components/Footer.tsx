import React from 'react';
import { Instagram, Facebook, Linkedin, Heart, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Arkline Studio</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating beautiful, functional spaces that enhance your daily life. Every design tells a story, and I'm here to help you tell yours.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/arkline_studio_/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/16gLJ3b7eW/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <a
                    href="https://pin.it/7I31yJ2N5"
                    className="p-2 bg-gray-100 rounded-sm hover:bg-amber-100 hover:text-amber-600 transition-colors duration-200"
                    aria-label="Pinterest"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0c-8.837 0-16 7.163-16 16 0 6.627 4.021 12.271 9.729 14.646-0.135-1.246-0.256-3.164 0.053-4.527 0.279-1.197 1.797-7.633 1.797-7.633s-0.459-0.918-0.459-2.273c0-2.131 1.236-3.726 2.775-3.726 1.309 0 1.941 0.982 1.941 2.158 0 1.316-0.838 3.287-1.27 5.117-0.361 1.531 0.768 2.779 2.277 2.779 2.732 0 4.832-2.883 4.832-7.043 0-3.687-2.652-6.266-6.438-6.266-4.395 0-6.977 3.297-6.977 6.703 0 1.346 0.518 2.797 1.166 3.584 0.129 0.156 0.148 0.293 0.109 0.451-0.119 0.492-0.385 1.531-0.438 1.742-0.068 0.273-0.221 0.332-0.512 0.201-1.918-0.797-3.121-3.293-3.121-5.301 0-4.316 3.646-9.484 10.883-9.484 5.813 0 9.629 4.211 9.629 8.734 0 5.973-3.309 10.406-8.211 10.406-1.646 0-3.195-0.891-3.725-1.898l-1.016 3.867c-0.309 1.18-1.148 2.656-1.713 3.559 1.289 0.398 2.652 0.617 4.078 0.617 8.837 0 16-7.163 16-16s-7.163-16-16-16z"/>
                    </svg>
                  </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design Consultation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Interior Styling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Virtual Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">+91 87588 64911</li>
              <li><a href="mailto:arklinestudio9@gmail.com" className="text-gray-400 hover:text-white transition-colors">arklinestudio9@gmail.com</a></li>
              <li className="text-gray-400">
                Sanala Road<br />
                Morbi-363641<br />
                Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025 Arkline Studio Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

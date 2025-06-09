import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Report Generator
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Create professional reports with the power of AI. Our platform helps you generate
              comprehensive and well-structured reports in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generate" className="text-sm text-gray-600 hover:text-indigo-600">
                  Generate Report
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">
                <a href="mailto:support@aireportgenerator.com" className="hover:text-indigo-600">
                  support@aireportgenerator.com
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <a href="tel:+1234567890" className="hover:text-indigo-600">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {currentYear} AI Report Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
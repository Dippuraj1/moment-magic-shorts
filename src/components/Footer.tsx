
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-teal-500 mb-4">
              Magic<span className="text-gray-800">Moments</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transform your wedding footage into beautiful highlight videos and shareable shorts with AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.248.6 1.821 1.173.56.56.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.173 1.821 4.903 4.903 0 01-1.82 1.173c-.637.247-1.364.416-2.428.465-1.06.048-1.41.06-4.12.06-2.71 0-3.06-.012-4.12-.06-1.065-.049-1.792-.218-2.428-.465a4.903 4.903 0 01-1.82-1.173 4.902 4.902 0 01-1.174-1.82c-.247-.637-.417-1.364-.465-2.428-.048-1.06-.06-1.42-.06-4.12 0-2.7.012-3.06.06-4.12.048-1.066.218-1.793.465-2.43a4.902 4.902 0 011.173-1.82 4.903 4.903 0 011.82-1.174c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06h.08zm-.04 1.8h-.066c-2.643 0-2.987.012-4.043.06-1.064.049-1.791.218-2.427.465-.668.25-1.248.6-1.821 1.173-.56.56-.902 1.132-1.152 1.8-.247.636-.416 1.363-.465 2.427-.048 1.067-.06 1.407-.06 4.123v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427.25.668.6 1.248 1.173 1.821.56.56 1.132.902 1.8 1.152.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h.08c2.643 0 2.987-.012 4.043-.06 1.064-.049 1.791-.218 2.427-.465.668-.25 1.248-.6 1.821-1.173.56-.56.902-1.132 1.152-1.8.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.643-.012-2.987-.06-4.043-.049-1.064-.218-1.791-.465-2.427a4.903 4.903 0 00-1.173-1.821 4.903 4.903 0 00-1.82-1.173c-.637-.247-1.364-.416-2.428-.465-1.06-.048-1.41-.06-4.12-.06zm1.834 5.2a4.8 4.8 0 11-.001 9.601 4.8 4.8 0 010-9.601zm-5.834 4.8a5.8 5.8 0 1110.001 4.2v-.2a5.8 5.8 0 01-10 0v.2zm7-7a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/upload" className="text-gray-600 hover:text-teal-500 transition-colors">Upload Video</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-teal-500 transition-colors">How It Works</Link></li>
              <li><Link to="/examples" className="text-gray-600 hover:text-teal-500 transition-colors">Examples</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-teal-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-600 hover:text-teal-500 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-teal-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-teal-500 transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-600 hover:text-teal-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-teal-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-teal-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Magic Moments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

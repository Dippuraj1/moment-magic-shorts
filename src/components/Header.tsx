
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, User } from 'lucide-react';

const Header = () => {
  const { user, session } = useAuth();

  const handleLogout = async () => {
    const { supabase } = await import('@/integrations/supabase/client');
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-teal-500">
            Magic<span className="text-gray-800">Moments</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-teal-500 transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors">
            How It Works
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-teal-500 transition-colors">
            Pricing
          </Link>
          {user && (
            <Link to="/highlights" className="text-gray-700 hover:text-teal-500 transition-colors">
              My Videos
            </Link>
          )}
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/upload" className="btn-primary">
                Upload Video
              </Link>
              <button onClick={handleLogout} className="flex items-center text-gray-700 hover:text-teal-500">
                <LogOut className="w-5 h-5 mr-1" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="flex items-center text-gray-700 hover:text-teal-500">
                <LogIn className="w-5 h-5 mr-1" /> Login
              </Link>
              <Link to="/auth" className="btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

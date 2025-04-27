
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const userEmail = user?.email || '';
  const displayName = userEmail.split('@')[0] || 'User';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-teal-500">
            Magic<span className="text-gray-800">Moments</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
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
        
        {/* Desktop Authentication Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/upload" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors">
                Upload Video
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
                        {displayName.charAt(0).toUpperCase()}
                      </div>
                      <span className="hidden lg:inline">{displayName}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center" disabled>
                    <User className="mr-2 h-4 w-4" />
                    <span>{userEmail}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-500 flex cursor-pointer items-center" 
                    onClick={signOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/auth" className="flex items-center text-gray-700 hover:text-teal-500">
                <LogIn className="w-5 h-5 mr-1" /> Login
              </Link>
              <Link to="/auth?tab=signup" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors">
                Get Started
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-teal-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-teal-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {user && (
              <Link 
                to="/highlights" 
                className="text-gray-700 hover:text-teal-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Videos
              </Link>
            )}
            
            <div className="pt-2 border-t border-gray-100">
              {user ? (
                <>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-500">{userEmail}</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/upload" 
                      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Upload Video
                    </Link>
                    <button 
                      onClick={() => {
                        signOut();
                        setMobileMenuOpen(false);
                      }} 
                      className="flex items-center justify-center space-x-1 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/auth" 
                    className="border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/auth?tab=signup" 
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

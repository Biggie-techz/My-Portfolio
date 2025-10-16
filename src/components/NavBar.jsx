import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import logo from '../assets/logo/logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/services', label: 'Services', icon: Briefcase },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-neutral-900/80 backdrop-blur-xl text-white sticky top-0 left-0 z-50"
    >
      <div className="relative">
        <div className="max-w-[1650px] mx-auto px-5 md:px-20 xl:px-5">
          <div className="flex items-center justify-between h-20">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={logo} alt="Logo" className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-purple-500/50" />
              <p className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                <span className="text-purple-400">AY</span>O
              </p>
            </motion.div>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.to}
                    className={`relative px-4 py-2 rounded-lg font-medium text-lg transition-all duration-300 ${
                      location.pathname === item.to
                        ? 'text-purple-400 bg-purple-500/20'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.to && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-purple-500/20 rounded-lg"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Contact
              </motion.button>
            </div>

            <div className="lg:hidden relative">
              <motion.button
                ref={buttonRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <Menu size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className={`absolute inset-0 p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-20 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col items-center pt-40 h-full space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-8 py-4 rounded-xl font-medium text-xl transition-all duration-300 ${
                        location.pathname === item.to
                          ? 'text-purple-400 bg-purple-500/20 shadow-lg'
                          : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                      }`}
                    >
                      <item.icon size={24} />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                    <Mail size={24} />
                    Contact
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NavBar;

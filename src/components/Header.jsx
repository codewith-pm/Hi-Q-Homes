import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', hash: '' },
    { name: 'About', href: '/', hash: '#about' },
    { name: 'Services', href: '/', hash: '#services' },
    { name: 'Packages', href: '/', hash: '#packages' },
    { name: 'Gallery', href: '/gallery', hash: '' },
    { name: 'Contact', href: '/', hash: '#contact' }
  ]

  const handleNavClick = (href, hash) => {
    setIsOpen(false)
    if (hash && location.pathname === '/') {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerHeight = 80
          const elementPosition = element.offsetTop - headerHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-wine-950 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Madurai: 88381 42079</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Usilampatti: 9787115701</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Near Chinthamani Signal, Madurai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-luxury' 
            : 'bg-white/90 backdrop-blur-sm'
        } ${location.pathname === '/' ? 'lg:top-10' : ''}`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-16 h-16 wine-gradient rounded-full flex items-center justify-center text-white font-bold text-xl font-playfair overflow-hidden"
              >
                <span className="relative z-10">H-Q</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-logo-shine"></div>
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-wine-900 font-playfair">Hi-Q Homes</h2>
                <span className="text-wine-700 text-sm italic font-georgia">Quality & Elegance</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.hash)}
                  className="relative text-wine-900 hover:text-wine-700 font-medium transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 wine-gradient transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8838142079"
                className="btn-primary"
              >
                Get Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-wine-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-wine-200"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleNavClick(item.href, item.hash)}
                      className="text-wine-900 hover:text-wine-700 font-medium py-2 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="tel:8838142079"
                    className="btn-primary inline-block text-center mt-4"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Heart, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 wood-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl font-playfair">
                  H-Q
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-playfair">Hi-Q Homes</h3>
                  <span className="text-amber-400 italic font-georgia">Quality & Elegance</span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed font-georgia mb-6 max-w-md">
                Creating luxury spaces with quality & elegance since 2017. Your trusted partner for premium construction, luxury interiors, and handcrafted teak wood furniture in Madurai.
              </p>
              <div className="flex items-center text-amber-400">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                <span className="font-georgia">Crafted with passion since 2017</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold font-playfair mb-6 text-amber-400">Premium Services</h4>
              <ul className="space-y-3">
                {['Luxury Construction', 'Interior Design', 'Handcrafted Teak Furniture', 'Expert Fabrication'].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-white/80 hover:text-amber-400 transition-colors duration-300 font-georgia">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold font-playfair mb-6 text-amber-400">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-white/80 font-georgia">88381 42079 (Madurai)</p>
                    <p className="text-white/80 font-georgia">9787115701 (Usilampatti)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-white/80 font-georgia">Near Chinthamani Signal, Madurai</p>
                    <a
                      href="https://maps.app.goo.gl/uEHpajxXSrBtpp9g9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 font-georgia text-sm mt-1"
                    >
                      View on Map
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 font-georgia">
              &copy; 2024 Hi-Q Homes Madurai. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-white/60 font-georgia">Service Areas:</span>
              <span className="text-amber-400 font-georgia">Tamil Nadu • Kerala • Andhra Pradesh • International</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
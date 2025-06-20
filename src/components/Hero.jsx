import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Award, Users } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Star, value: '7+', label: 'Years Experience' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-white">
        <div className="absolute inset-0 luxury-pattern opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 wine-gradient rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 gold-gradient rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-wine-100 text-wine-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Construction Since 2017</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gradient font-playfair leading-tight"
            >
              Crafting Dreams into
              <span className="block wine-gradient bg-clip-text text-transparent">
                Luxury Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-wine-700 leading-relaxed font-georgia max-w-2xl"
            >
              Premier construction, exquisite interior design, and handcrafted teak wood furniture specialists in Madurai. Creating spaces that reflect your vision with uncompromising quality and timeless elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary group"
              >
                Get Premium Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="btn-secondary"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-wine-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-wine-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-wine-900 font-playfair">{stat.value}</div>
                  <div className="text-sm text-wine-600 font-georgia">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Interior Design"
                className="w-full h-[600px] object-cover rounded-3xl luxury-shadow-hover"
              />
              <div className="absolute inset-0 wine-gradient opacity-10 rounded-3xl"></div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl luxury-shadow"
              >
                <div className="text-2xl font-bold text-wine-900 font-playfair">₹2,500+</div>
                <div className="text-sm text-wine-600">Per Sq Ft</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-wine-900 text-white p-4 rounded-2xl luxury-shadow"
              >
                <div className="text-lg font-bold font-playfair">Premium Quality</div>
                <div className="text-sm opacity-90">Guaranteed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
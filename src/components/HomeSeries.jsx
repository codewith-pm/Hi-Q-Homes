import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Gift, Star } from 'lucide-react'

const HomeSeries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const furnitureItems = [
    'Premium Suite Set',
    'Luxury Sofa Set 3+1+CT',
    'Elegant Dressing Unit',
    'Designer Corner Rack',
    'Ornate Wall Mirror',
    'Kids Picnic Chair',
    '2 Door Wardrobe',
    'King Size Cot + Premium Mattress + 2 Pillows',
    '4-Seater Dining Set',
    'Decorative Flower Vase',
    'Modern TV Unit',
    'Stylish Shoe Rack',
    'Artistic Key Holder',
    'Premium Laundry Box',
    'Bed Side Tables (2)'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 via-white to-cream-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 wine-gradient rounded-full blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 gold-gradient rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-wine-600 mr-3" />
            <h2 className="text-4xl lg:text-6xl font-bold text-gradient font-playfair">
              Luxury Home Series Collection
            </h2>
            <Gift className="w-8 h-8 text-gold-500 ml-3" />
          </div>
          <p className="text-xl text-wine-700 max-w-4xl mx-auto font-georgia">
            Complete 15-piece handcrafted teak wood furniture set - Perfect for new homes and weddings
          </p>
          <div className="flex items-center justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
            ))}
            <span className="ml-2 text-wine-700 font-georgia">Premium Quality Guaranteed</span>
          </div>
        </motion.div>

        {/* Furniture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {furnitureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300 border-2 border-transparent hover:border-wine-200">
                <div className="text-center">
                  <div className="w-12 h-12 wine-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-wine-900 font-georgia group-hover:text-wine-700 transition-colors duration-300">
                    {item}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-wine-900 text-white p-8 lg:p-12 rounded-3xl luxury-shadow"
        >
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Perfect for Weddings</h3>
              <p className="text-white/80 font-georgia">Complete furniture solution for new couples starting their journey</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Premium Teak Wood</h3>
              <p className="text-white/80 font-georgia">Handcrafted from finest Tectona Grandis with traditional artistry</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Complete Package</h3>
              <p className="text-white/80 font-georgia">Everything you need to furnish your entire home in one collection</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeSeries
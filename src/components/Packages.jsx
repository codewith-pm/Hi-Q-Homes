import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, Star, Gem, Award, Sparkles } from 'lucide-react'

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const packages = [
    {
      name: 'Basic',
      price: '2,500',
      icon: Star,
      description: 'Essential construction package with quality materials and professional workmanship',
      features: ['Quality Materials', 'Professional Work', 'Basic Finishes', 'Standard Timeline'],
      color: 'wine',
      popular: false
    },
    {
      name: 'Classic',
      price: '2,900',
      icon: Award,
      description: 'Enhanced features with superior finishes and upgraded premium materials',
      features: ['Premium Materials', 'Superior Finishes', 'Enhanced Features', 'Priority Support'],
      color: 'wine',
      popular: false
    },
    {
      name: 'Premium',
      price: '3,300',
      icon: Crown,
      description: 'Premium quality with luxury finishes and modern high-end amenities',
      features: ['Luxury Finishes', 'Modern Amenities', 'Premium Quality', 'Dedicated Manager'],
      color: 'gold',
      popular: true
    },
    {
      name: 'Royal',
      price: '3,800',
      icon: Gem,
      description: 'Luxury construction with high-end materials and bespoke custom features',
      features: ['High-end Materials', 'Bespoke Features', 'Luxury Construction', 'VIP Service'],
      color: 'wine',
      popular: false
    },
    {
      name: 'Imperia',
      price: '4,300',
      icon: Sparkles,
      description: 'Ultimate luxury package with premium materials and exclusive bespoke design',
      features: ['Ultimate Luxury', 'Exclusive Design', 'Premium Materials', 'Concierge Service'],
      color: 'gold',
      popular: false
    }
  ]

  return (
    <section id="packages" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 wine-gradient rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gold-gradient rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient font-playfair mb-6">
            Construction Packages
          </h2>
          <p className="text-xl text-wine-700 max-w-3xl mx-auto font-georgia">
            Choose the perfect luxury package for your construction needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative group ${pkg.popular ? 'lg:scale-110 z-10' : ''}`}
            >
              <div className={`relative bg-white rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-500 overflow-hidden border-2 ${
                pkg.popular ? 'border-gold-400' : 'border-transparent hover:border-wine-200'
              }`}>
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold font-georgia">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 ${pkg.color === 'wine' ? 'wine-gradient' : 'gold-gradient'} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${pkg.color === 'wine' ? 'wine-gradient' : 'gold-gradient'} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-wine-900 font-playfair text-center mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className={`text-4xl font-bold ${pkg.color === 'wine' ? 'text-wine-900' : 'text-gold-600'} font-playfair`}>
                      ₹{pkg.price}
                    </div>
                    <div className="text-wine-600 font-georgia">/sq ft</div>
                  </div>

                  {/* Description */}
                  <p className="text-wine-700 text-center mb-6 font-georgia leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 ${pkg.color === 'wine' ? 'bg-wine-600' : 'bg-gold-500'} rounded-full mr-3`}></div>
                        <span className="text-wine-700 font-georgia">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'gold-gradient text-white shadow-gold hover:shadow-lg'
                        : 'border-2 border-wine-900 text-wine-900 hover:wine-gradient hover:text-white'
                    }`}
                  >
                    Choose Package
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-wine-700 font-georgia mb-6">
            Need a custom package? We'll create the perfect solution for your specific requirements.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn-primary"
          >
            Get Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
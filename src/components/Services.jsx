import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Palette, Armchair, Wrench, ArrowRight } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Building2,
      title: 'Premium Construction',
      description: 'Complete luxury construction services for residential, commercial, and industrial projects',
      features: [
        'Luxury Residential & Apartments',
        'Corporate Office Buildings',
        'Fine Dining Restaurants & Hospitality',
        'Premium Shopping Malls',
        'Exclusive Farm Houses & Beach Houses'
      ],
      color: 'wine',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Palette,
      title: 'Luxury Interior Design',
      description: 'Professional interior design services that blend sophistication with functionality',
      features: [
        'Bespoke Space Planning',
        '3D Luxury Visualization',
        'Custom Premium Designs',
        'Complete Project Management'
      ],
      color: 'gold',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Armchair,
      title: 'Handcrafted Teak Furniture',
      description: 'Premium teak wood furniture crafted with precision and traditional artistry',
      features: [
        'Bespoke Custom Furniture',
        'Luxury Home Series Collection',
        'Antique Collectibles',
        'Artisan Handicrafts'
      ],
      color: 'wine',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Wrench,
      title: 'Expert Fabrication',
      description: 'Professional fabrication services for various premium materials and applications',
      features: [
        'Precision Metal Fabrication',
        'Custom Luxury Solutions',
        'Industrial Applications',
        'Premium Quality Assurance'
      ],
      color: 'gold',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
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
            Our Premium Services
          </h2>
          <p className="text-xl text-wine-700 max-w-3xl mx-auto font-georgia">
            Comprehensive luxury solutions for all your construction and interior needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${service.color === 'wine' ? 'wine-gradient' : 'gold-gradient'} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${service.color === 'wine' ? 'bg-wine-900' : 'bg-gold-500'} rounded-full flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-wine-900 font-playfair mb-4">
                    {service.title}
                  </h3>
                  <p className="text-wine-700 font-georgia mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={`w-2 h-2 ${service.color === 'wine' ? 'bg-wine-600' : 'bg-gold-500'} rounded-full mr-3`}></div>
                        <span className="text-wine-700 font-georgia">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center ${service.color === 'wine' ? 'text-wine-900 hover:text-wine-700' : 'text-gold-600 hover:text-gold-700'} font-semibold transition-colors duration-300 group`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
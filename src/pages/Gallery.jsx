import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Filter, Star, ArrowRight, Phone } from 'lucide-react'

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'interior', name: 'Interiors' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'commercial', name: 'Commercial' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'construction',
      title: 'Premium Villa Elevation',
      subtitle: 'Royal Package Construction',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      category: 'construction',
      title: 'Modern Residential Complex',
      subtitle: 'Multi-story Luxury Apartments',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      category: 'interior',
      title: 'Luxury Living Room',
      subtitle: 'Complete Interior Design',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      category: 'interior',
      title: 'Premium Master Bedroom',
      subtitle: 'Teak Wood Interior Design',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      category: 'furniture',
      title: 'Handcrafted Teak Dining Set',
      subtitle: 'Premium 6-Seater Collection',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      category: 'furniture',
      title: 'Luxury Teak Wood Sofa',
      subtitle: '3+1+1 Premium Set',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      category: 'commercial',
      title: 'Fine Dining Restaurant',
      subtitle: 'Complete Commercial Interior',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 8,
      category: 'commercial',
      title: 'Corporate Office Design',
      subtitle: 'Premium Office Interior',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Villa Owner, Madurai',
      content: 'Hi-Q Homes delivered exceptional luxury quality in our villa construction. The handcrafted teak wood work is simply outstanding. Truly premium service!'
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Design Client',
      content: 'The luxury interior design team at Hi-Q Homes transformed our space beautifully. Their attention to detail and use of premium materials is truly impressive.'
    },
    {
      name: 'Murugan Pillai',
      role: 'Furniture Customer',
      content: 'We ordered the complete Home Series furniture set for our daughter\'s wedding. The craftsmanship and luxury quality exceeded all our expectations.'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section-padding wine-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 luxury-pattern opacity-30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold font-playfair mb-6">
              Our Luxury Portfolio
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto font-georgia">
              Explore our finest work in premium construction, luxury interiors, and handcrafted teak wood furniture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-cream-50 border-b border-wine-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'wine-gradient text-white shadow-wine'
                    : 'bg-white text-wine-900 border-2 border-wine-200 hover:border-wine-500'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 wine-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold font-playfair mb-2">{item.title}</h3>
                      <p className="text-white/90 font-georgia">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gradient font-playfair mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-wine-700 max-w-3xl mx-auto font-georgia">
              Testimonials from our satisfied luxury clients
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300 border-l-4 border-wine-500"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-wine-700 italic font-georgia mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-bold text-wine-900 font-playfair">{testimonial.name}</div>
                  <div className="text-wine-600 font-georgia text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding wine-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 luxury-pattern opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
              Ready to Start Your Luxury Project?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto font-georgia">
              Let's discuss your premium construction, interior design, or furniture needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/#contact"
                className="bg-white text-wine-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cream-100 flex items-center justify-center"
              >
                Get Premium Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8838142079"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-wine-900 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Gallery
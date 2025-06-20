import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Gift, Star, Crown } from 'lucide-react'

const HomeSeries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const furnitureItems = [
    {
      name: 'Premium Suite Set',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Luxury 3+1+1 sofa collection'
    },
    {
      name: 'Luxury Sofa Set 3+1+CT',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete living room ensemble'
    },
    {
      name: 'Elegant Dressing Unit',
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Handcrafted vanity with mirror'
    },
    {
      name: 'Designer Corner Rack',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Space-saving storage solution'
    },
    {
      name: 'Ornate Wall Mirror',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Decorative teak wood frame'
    },
    {
      name: 'Kids Picnic Chair',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Child-friendly dining chair'
    },
    {
      name: '2 Door Wardrobe',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Spacious storage cabinet'
    },
    {
      name: 'King Size Cot + Premium Mattress + 2 Pillows',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete bedroom solution'
    },
    {
      name: '4-Seater Dining Set',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Family dining collection'
    },
    {
      name: 'Decorative Flower Vase',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Artistic home accent'
    },
    {
      name: 'Modern TV Unit',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Entertainment center'
    },
    {
      name: 'Stylish Shoe Rack',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Organized footwear storage'
    },
    {
      name: 'Artistic Key Holder',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Functional wall decor'
    },
    {
      name: 'Premium Laundry Box',
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant storage solution'
    },
    {
      name: 'Bed Side Tables (2)',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Matching nightstand pair'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"wood\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M0,10 Q5,5 10,10 T20,10\" stroke=\"%23D97706\" stroke-width=\"0.5\" fill=\"none\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23wood)\"/></svg>')] opacity-30"></div>
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
            <Crown className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent font-playfair">
              Luxury Home Series Collection
            </h2>
            <Gift className="w-8 h-8 text-amber-500 ml-3" />
          </div>
          <p className="text-xl text-amber-800 max-w-4xl mx-auto font-georgia">
            Complete 15-piece handcrafted teak wood furniture set - Perfect for new homes and weddings
          </p>
          <div className="flex items-center justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
            ))}
            <span className="ml-2 text-amber-700 font-georgia">Premium Quality Guaranteed</span>
          </div>
        </motion.div>

        {/* Furniture Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {furnitureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-amber-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    #{index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-amber-900 font-georgia text-lg mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-amber-700 font-georgia text-sm opacity-80">
                    {item.description}
                  </p>
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
          className="bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 text-white p-8 lg:p-12 rounded-3xl luxury-shadow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"luxury-pattern\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\"><circle cx=\"15\" cy=\"15\" r=\"2\" fill=\"%23FCD34D\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23luxury-pattern)\"/></svg>')] opacity-30"></div>
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Perfect for Weddings</h3>
              <p className="text-white/80 font-georgia">Complete furniture solution for new couples starting their journey</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">Premium Teak Wood</h3>
              <p className="text-white/80 font-georgia">Handcrafted from finest Tectona Grandis with traditional artistry</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
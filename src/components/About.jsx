import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, Award, CheckCircle } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const visionPoints = [
    'Transforming intangible dreams into tangible luxury discoveries',
    'Research and development in premium wood engineering',
    'Distributing Tectona Grandis in every home for aesthetic excellence'
  ]

  const missionPoints = [
    'The Right Premium Product',
    'At the Right Time',
    'At the Right Place'
  ]

  return (
    <section id="about" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 wine-gradient rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 gold-gradient rounded-full blur-3xl opacity-5"></div>
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
            About Hi-Q Homes
          </h2>
          <p className="text-xl text-wine-700 max-w-3xl mx-auto font-georgia">
            Creating exceptional luxury spaces since 2017, founded by Mr. S. Raghu with a vision to transform dreams into reality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-wine-900 font-playfair mb-4">Our Legacy</h3>
              <p className="text-lg text-wine-700 leading-relaxed font-georgia">
                Established in 2017 by Mr. S. Raghu, Hi-Q Homes began as a premium trading company specializing in solid teak wood. Over the years, we've evolved into a comprehensive luxury solution provider for construction, interior design, furniture manufacturing, and fabrication services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl luxury-shadow"
              >
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-wine-600 mr-3" />
                  <h4 className="text-xl font-bold text-wine-900 font-playfair">Our Vision</h4>
                </div>
                <ul className="space-y-3">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-wine-700 font-georgia">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-wine-900 text-white p-6 rounded-2xl luxury-shadow"
              >
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-gold-400 mr-3" />
                  <h4 className="text-xl font-bold font-playfair">Our Mission</h4>
                </div>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 font-georgia">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Handcrafted Teak Wood Furniture"
                className="w-full h-[500px] object-cover rounded-3xl luxury-shadow-hover"
              />
              <div className="absolute inset-0 wine-gradient opacity-10 rounded-3xl"></div>
              
              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-2xl luxury-shadow"
              >
                <Award className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold font-playfair">7+ Years</div>
                <div className="text-sm opacity-90">Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Chairman Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white p-8 lg:p-12 rounded-3xl luxury-shadow"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-wine-900 font-playfair mb-4">Chairman's Message</h3>
            <div className="w-24 h-1 wine-gradient mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg text-wine-700 italic text-center leading-relaxed font-georgia mb-6">
              "Wooden Industry has been my vision & mission for the past 7 years. I established Hi-Q in 2017 as a trading company, and we've grown into a comprehensive luxury solutions provider. Our passion for wood and its rich heritage drives us to deliver excellence in every project."
            </blockquote>
            <div className="text-center">
              <div className="text-xl font-bold text-wine-900 font-playfair">Mr. S. Raghu</div>
              <div className="text-wine-600 font-georgia">Chairman & Founder</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Globe, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappMessage = `Hi Hi-Q Homes,

I'm interested in your services. Here are my details:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Service: ${formData.service}
Message: ${formData.message || 'No additional message'}

Please get back to me at your earliest convenience.

Thank you!`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/918838142079?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Premium Locations',
      details: ['Near Chinthamani Signal, Madurai', 'Usilampatti Branch Available'],
      color: 'wine'
    },
    {
      icon: Phone,
      title: 'Contact Numbers',
      details: ['Madurai: 88381 42079', 'Usilampatti: 9787115701'],
      color: 'gold'
    },
    {
      icon: Globe,
      title: 'Service Areas',
      details: ['Tamil Nadu, Kerala, Andhra Pradesh', 'International: Sri Lanka, Singapore, Middle East'],
      color: 'wine'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-cream-50 via-white to-cream-100 relative overflow-hidden">
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
            Contact Us
          </h2>
          <p className="text-xl text-wine-700 max-w-3xl mx-auto font-georgia">
            Get in touch for your next luxury project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
              >
                <div className={`w-12 h-12 ${info.color === 'wine' ? 'wine-gradient' : 'gold-gradient'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-wine-900 font-playfair mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-wine-700 font-georgia mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl luxury-shadow-hover border border-wine-100"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border-2 border-wine-200 rounded-xl focus:border-wine-500 focus:outline-none transition-colors duration-300 font-georgia"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border-2 border-wine-200 rounded-xl focus:border-wine-500 focus:outline-none transition-colors duration-300 font-georgia"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border-2 border-wine-200 rounded-xl focus:border-wine-500 focus:outline-none transition-colors duration-300 font-georgia"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-wine-200 rounded-xl focus:border-wine-500 focus:outline-none transition-colors duration-300 font-georgia"
                  >
                    <option value="">Select Service</option>
                    <option value="construction">Premium Construction</option>
                    <option value="interior">Luxury Interior Design</option>
                    <option value="furniture">Handcrafted Teak Furniture</option>
                    <option value="fabrication">Expert Fabrication</option>
                    <option value="consultation">Luxury Consultation</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your luxury project"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-wine-200 rounded-xl focus:border-wine-500 focus:outline-none transition-colors duration-300 font-georgia resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wine-900 font-playfair mb-2">
                  Message Sent!
                </h3>
                <p className="text-wine-700 font-georgia">
                  You will be redirected to WhatsApp to complete your inquiry.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Globe, Send, CheckCircle, ExternalLink } from 'lucide-react'

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
      color: 'amber',
      link: 'https://maps.app.goo.gl/uEHpajxXSrBtpp9g9'
    },
    {
      icon: Phone,
      title: 'Contact Numbers',
      details: ['Madurai: 88381 42079', 'Usilampatti: 9787115701'],
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Service Areas',
      details: ['Tamil Nadu, Kerala, Andhra Pradesh', 'International: Sri Lanka, Singapore, Middle East'],
      color: 'amber'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"contact-pattern\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"><path d=\"M20,5 L35,20 L20,35 L5,20 Z\" fill=\"none\" stroke=\"%23D97706\" stroke-width=\"1\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23contact-pattern)\"/></svg>')] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent font-playfair mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto font-georgia">
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
                className="flex items-start space-x-4 bg-white p-6 rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${info.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-yellow-600' : 'bg-gradient-to-br from-orange-500 to-red-600'} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-amber-900 font-playfair mb-2">
                      {info.title}
                    </h3>
                    {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-amber-700 font-georgia mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-amber-900 font-playfair mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-amber-600" />
                Find Us on Map
              </h3>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9999999999995!2d78.1198!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xc54d0c1c5b1c5b1c!2sChinthamani%20Signal%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/uEHpajxXSrBtpp9g9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-800 font-georgia font-semibold transition-colors duration-300"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl luxury-shadow-hover border border-amber-200"
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
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 font-georgia"
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
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 font-georgia"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 font-georgia"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 font-georgia"
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
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 font-georgia resize-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-amber-700 hover:to-orange-700 flex items-center justify-center shadow-lg hover:shadow-xl"
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
                <h3 className="text-2xl font-bold text-amber-900 font-playfair mb-2">
                  Message Sent!
                </h3>
                <p className="text-amber-700 font-georgia">
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
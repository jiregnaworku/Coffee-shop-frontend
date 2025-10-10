import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['Enjibara Town', 'Amhara Region', 'Ethiopia'],
      color: 'text-red-600'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+251 911 123 456', '+251 922 456 789'],
      color: 'text-blue-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['hello@enjibaracoffee.et', 'orders@enjibaracoffee.et'],
      color: 'text-green-600'
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Sat-Sun: 8:00 AM - 9:00 PM'],
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-coffee-gradient text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Send us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">Fill out the form below and we'll get back to you shortly.</p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg transition-colors duration-300">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg transition-colors duration-300">
                  ❌ Oops! Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering</option>
                    <option value="events">Private Events</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-coffee-600 dark:bg-coffee-500 hover:bg-coffee-700 dark:hover:bg-coffee-400 text-white dark:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${info.color.replace('600', '100')} dark:${info.color.replace('600', '900')} rounded-full flex items-center justify-center transition-colors duration-300`}>
                        <info.icon className={`text-xl ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
                    { Icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-600 dark:hover:text-pink-400' },
                    { Icon: FaTwitter, label: 'Twitter', color: 'hover:text-sky-600 dark:hover:text-sky-400' }
                  ].map(({ Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-600`}
                    >
                      <Icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Find Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Located in the beautiful Amhara region of Ethiopia, Enjibara is home to some of the finest coffee in the world.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden h-96 lg:h-[500px] transition-colors duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.982812345678!2d36.9275!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1634b5c5b5c5b5c5%3A0x5c5b5c5b5c5b5c5b!2sEnjibara%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Shop Location - Enjibara, Ethiopia"
              className="rounded-2xl"
            ></iframe>
          </div>

          {/* Directions */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              We're located in Enjibara, the heart of Ethiopia's coffee country, surrounded by lush coffee plantations and rich cultural heritage.
            </p>
            <button className="bg-coffee-600 dark:bg-coffee-500 hover:bg-coffee-700 dark:hover:bg-coffee-400 text-white dark:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Do you offer Wi-Fi?',
                answer: 'Yes, we provide free high-speed Wi-Fi for all customers.'
              },
              {
                question: 'Is there parking available?',
                answer: 'We have parking available near our location in Enjibara town center.'
              },
              {
                question: 'Do you cater events?',
                answer: 'Absolutely! We offer full catering services for events of all sizes with authentic Ethiopian coffee.'
              },
              {
                question: 'Are you hiring?',
                answer: 'We\'re always looking for passionate coffee lovers. Check our careers page for opportunities.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

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
      details: ['Nekemt', 'Oromia Region', 'Ethiopia'],
      color: 'text-site-primary'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+251 918 348 141', '+251 998 033 444'],
      color: 'text-site-gold'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['hello@Jirocoffee.et', 'orders@Jirocoffee.et'],
      color: 'text-site-leaf'
    },
    {
      icon: FaClock,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Sat-Sun: 8:00 AM - 9:00 PM'],
      color: 'text-site-cherry'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-site-cream via-site-warm/20 to-site-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream py-32 lg:py-40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-site-cream/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">Get In Touch</h1>
          <p className="text-2xl lg:text-3xl text-site-cream/90 leading-relaxed font-light animate-fade-in-up">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft hover:shadow-medium p-10 lg:p-12 border border-site-gold/20 animate-fade-in-left">
              <h2 className="text-4xl font-serif font-bold text-site-primary mb-4">Send us a Message</h2>
              <p className="text-xl text-site-text/70 mb-10 font-light">Fill out the form below and we'll get back to you shortly.</p>

              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-site-gold/20 backdrop-blur-sm border border-site-gold/40 text-site-primary rounded-2xl animate-scale-in">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-site-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">Thank you! Your message has been sent successfully. We'll get back to you soon!</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 rounded-lg">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-site-primary mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-site-primary mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-site-primary mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
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
                  <label htmlFor="message" className="block text-lg font-medium text-site-primary mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-10">

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium p-8 hover:-translate-y-2 transition-all duration-500 border border-site-gold/20 animate-fade-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-start space-x-6">
                      <div className={`flex-shrink-0 w-16 h-16 ${info.color.replace('site-', 'bg-')}/10 rounded-2xl flex items-center justify-center`}>
                        <info.icon className={`text-2xl ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-site-primary mb-3">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-site-text/80 text-lg leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-soft p-8 border border-site-gold/20 animate-fade-in">
                <h3 className="text-2xl font-serif font-bold text-site-primary mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                  {[
                    { Icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-600 bg-blue-100 hover:bg-blue-200' },
                    { Icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-600 bg-pink-100 hover:bg-pink-200' },
                    { Icon: FaTwitter, label: 'Twitter', color: 'hover:text-sky-600 bg-sky-100 hover:bg-sky-200' }
                  ].map(({ Icon, label, color }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-site-text hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <Icon className="text-2xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-site-warm/30 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-site-primary mb-6">Find Us</h2>
            <p className="text-2xl text-site-text/80 leading-relaxed max-w-3xl mx-auto font-light">
              Located in the beautiful Oromia region of Ethiopia, Nekemt is home to some of the finest coffee in the world.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft overflow-hidden h-96 lg:h-[600px] border border-site-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.982812345678!2d36.9275!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1634b5c5b5c5b5c5%3A0x5c5b5c5b5c5b5c5b!2sNekemte%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Shop Location - Nekemte, Ethiopia"
              className="rounded-3xl"
            ></iframe>
          </div>

          {/* Directions */}
          <div className="mt-12 text-center">
            <p className="text-site-text/70 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              We're located in Nekemte, the heart of Ethiopia's coffee country, surrounded by lush coffee plantations and rich cultural heritage.
            </p>
            <button
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Nekemte,Ethiopia', '_blank')}
              className="bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              <span className="flex items-center gap-3">
                Get Directions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-site-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-2xl text-site-text/70 font-light">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                question: 'Do you offer Wi-Fi?',
                answer: 'Yes, we provide free high-speed Wi-Fi for all customers.'
              },
              {
                question: 'Is there parking available?',
                answer: 'We have parking available near our location in Nekemte town center.'
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
              <div key={index} className="bg-site-cream/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-site-gold/20 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-2xl font-serif font-bold text-site-primary mb-4">{faq.question}</h3>
                <p className="text-site-text/80 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1000);
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Address', details: ['Nekemt, Oromia, Ethiopia'], color: 'bg-site-primary text-white' },
    { icon: FaPhone, title: 'Call', details: ['+251 918 348 141', '+251 998 033 444'], color: 'bg-site-gold text-site-cherry' },
    { icon: FaEnvelope, title: 'Email', details: ['hello@Jirocoffee.et', 'orders@Jirocoffee.et'], color: 'bg-site-leaf text-white' },
    { icon: FaClock, title: 'Hours', details: ['Mon-Fri: 7 AM - 8 PM', 'Sat-Sun: 8 AM - 9 PM'], color: 'bg-site-cherry text-white' }
  ];

  return (
    <div className="bg-site-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-site-cherry to-site-gold text-site-cream py-24 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200')] bg-cover bg-center"></div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold z-10 drop-shadow-lg">Contact Us</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl z-10 drop-shadow-sm">We’re here to help. Reach out with questions, feedback, or business inquiries and we’ll get back to you promptly.</p>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto p-6 lg:p-12 -mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-site-gold/20">
          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-site-gold/20 text-site-primary rounded-lg flex items-center gap-2 text-sm">
              Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} required className="w-full p-3 rounded-lg border border-site-gold/30 text-sm focus:ring-2 focus:ring-site-gold focus:border-transparent transition" />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleInputChange} required className="w-full p-3 rounded-lg border border-site-gold/30 text-sm focus:ring-2 focus:ring-site-gold focus:border-transparent transition" />
            <select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full p-3 rounded-lg border border-site-gold/30 text-sm focus:ring-2 focus:ring-site-gold focus:border-transparent transition">
              <option value="">Select Subject *</option>
              <option value="general">General Inquiry</option>
              <option value="catering">Catering</option>
              <option value="events">Private Events</option>
              <option value="wholesale">Wholesale</option>
              <option value="feedback">Feedback</option>
              <option value="careers">Careers</option>
            </select>
            <textarea name="message" rows={5} placeholder="Message *" value={formData.message} onChange={handleInputChange} required className="w-full p-3 rounded-lg border border-site-gold/30 text-sm focus:ring-2 focus:ring-site-gold focus:border-transparent transition" />
            <button type="submit" disabled={isSubmitting} className="w-full bg-site-gold text-site-cherry font-bold py-3 rounded-lg text-sm transition hover:-translate-y-0.5 shadow-lg">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md border border-site-gold/20 transition hover:shadow-xl">
              <div className={`p-3 rounded-xl ${info.color} flex items-center justify-center text-xl`}>
                {React.createElement(info.icon)}
              </div>
              <div>
                <h4 className="font-semibold text-site-primary">{info.title}</h4>
                {info.details.map((d, idx) => <p key={idx} className="text-sm text-site-text">{d}</p>)}
              </div>
            </div>
          ))}
          <div className="bg-white p-4 rounded-2xl shadow-md border border-site-gold/20">
            <h4 className="font-semibold text-site-primary mb-2 text-sm">Follow Us</h4>
            <div className="flex gap-2">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white hover:bg-site-gold transition">
                  <Icon className="text-site-text hover:text-site-cherry" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto p-6 lg:p-12">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-site-gold/20 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.982812345678!2d36.9275!3d11.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1634b5c5b5c5b5c5%3A0x5c5b5c5b5c5b5c5b!2sNekemte%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

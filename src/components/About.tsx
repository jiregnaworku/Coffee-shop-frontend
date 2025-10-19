import React from 'react';

interface AboutProps {
  goToContact?: () => void;
  goToMenu?: () => void;
}

const About: React.FC<AboutProps> = ({ goToContact, goToMenu }) => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Head Barista',
      bio: 'With over 15 years in specialty coffee, Sarah founded our shop with a passion for creating exceptional coffee experiences. Her expertise in sourcing and roasting has been the cornerstone of our success.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      achievements: ['Certified Q-Grader', 'Roasting Champion 2019', '15+ Years Experience']
    },
    {
      name: 'Michael Chen',
      role: 'Master Roaster',
      bio: 'Michael brings precision and artistry to every batch he roasts. His background in chemical engineering combined with coffee passion results in consistently perfect roasts.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      achievements: ['PhD Food Science', 'Award-winning Roaster', 'Sustainability Expert']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Community',
      bio: 'Emma ensures every customer feels like family. She leads our community events, workshops, and creates the warm, welcoming atmosphere that makes our shop special.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      achievements: ['Event Planning Expert', 'Community Builder', 'Customer Experience Specialist']
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms worldwide, ensuring every cup meets our exacting standards.',
      icon: '☕'
    },
    {
      title: 'Community Focus',
      description: 'Coffee brings people together. We\'re committed to creating a welcoming space where connections are made over great coffee.',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'From farm to cup, we prioritize environmentally responsible practices and support fair trade partnerships.',
      icon: '🌱'
    },
    {
      title: 'Innovation',
      description: 'We constantly explore new brewing methods, flavors, and experiences for our customers.',
      icon: '🔬'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-site-cream via-site-warm to-site-cream">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-site-cream/30"></div>
        <div className="absolute top-20 left-10 w-60 h-60 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="animate-fade-in-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
              Our Story
            </h1>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>Founded in 2020, our coffee shop began as a dream to create more than just another café.</p>
              <p>We wanted to build a community around exceptional coffee, where every cup tells a story of passion and craftsmanship.</p>
              <p>Today, we continue to push boundaries, source extraordinary beans, and create experiences that keep our community coming back.</p>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 bg-gradient-to-tr from-site-gold/20 via-site-cream/10 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800&fit=crop"
                alt="Coffee shop interior"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-3 -left-3 bg-site-gold text-site-cherry px-4 py-2 rounded-2xl font-semibold text-xs shadow-lg">
                Est. 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-site-primary mb-4">Our Mission</h2>
            <p className="text-sm sm:text-base text-site-text/80 max-w-3xl mx-auto leading-relaxed font-light">
              To craft exceptional coffee experiences that bring people together, support sustainable farming communities, and inspire coffee lovers to discover the artistry behind every cup.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Coffee beans and brewing equipment"
                className="rounded-2xl shadow-md w-full h-auto hover:shadow-lg transition-shadow duration-500"
              />
            </div>
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-site-gold/20">
                <h3 className="text-lg lg:text-xl font-serif font-bold text-site-primary mb-2">Quality Without Compromise</h3>
                <p className="text-site-text/80 text-sm leading-relaxed">
                  We work directly with farmers who share our commitment to quality, sustainability, and fair practices. Every bean is carefully selected, roasted to perfection, and brewed with precision.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-site-gold/20">
                <h3 className="text-lg lg:text-xl font-serif font-bold text-site-primary mb-2">Building Community</h3>
                <p className="text-site-text/80 text-sm leading-relaxed">
                  More than a coffee shop, we're a gathering place. Whether you're meeting friends, working remotely, or simply need a moment of peace, our space is designed to welcome and inspire connections that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-site-warm/30 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-site-primary mb-2">Our Values</h2>
          <p className="text-sm sm:text-base text-site-text/80 max-w-3xl mx-auto leading-relaxed font-light">
            Every decision we make is guided by our core values that define who we are and how we serve our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-500 text-center border border-site-gold/20 group animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-sm lg:text-base font-serif font-bold text-site-primary mb-1">{value.title}</h3>
              <p className="text-site-text/80 text-xs leading-snug">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-site-primary mb-4">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up" style={{animationDelay: `${i * 0.2}s`}}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm lg:text-base font-serif font-bold text-site-primary mb-1">{member.name}</h3>
                <p className="text-site-text/60 font-medium mb-2 text-xs">{member.role}</p>
                <p className="text-site-text/80 text-xs leading-snug mb-2">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.achievements.map((ach, idx) => (
                    <span key={idx} className="bg-site-gold/20 text-site-primary px-2 py-1 rounded-full text-xs font-medium border border-site-gold/30 hover:bg-site-gold/30 transition-colors duration-300">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream text-center relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-site-cream/20"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Experience the Difference</h2>
          <p className="text-sm sm:text-base mb-6 text-site-cream/90 leading-relaxed font-light">
            Ready to taste the passion and craftsmanship that goes into every cup? Visit us today and become part of our coffee community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goToContact}
              className="group bg-site-cream text-site-primary font-bold py-2 px-6 rounded-2xl shadow-md hover:shadow-site-cream/25 transform hover:-translate-y-1 transition-all duration-500 text-sm"
            >
              Find Our Location
            </button>
            <button
              onClick={goToMenu}
              className="group border-2 border-site-cream/80 text-site-cream hover:bg-site-cream hover:text-site-primary font-bold py-2 px-6 rounded-2xl transition-all duration-500 text-sm backdrop-blur-sm hover:shadow-md"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

import React from 'react';

const About: React.FC = () => {
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
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-coffee-warm">
      {/* Hero Section */}
      <section className="relative bg-coffee-gradient text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Our Story
              </h1>
              <div className="space-y-6 text-lg lg:text-xl text-orange-100 leading-relaxed">
                <p>
                  Founded in 2020, our coffee shop began as a dream to create more than just another café.
                </p>
                <p>
                  We wanted to build a community around exceptional coffee, where every cup tells a story of passion, craftsmanship, and connection.
                </p>
                <p>
                  Today, we continue to push boundaries, source extraordinary beans from sustainable
                  farms worldwide, and create memorable experiences that keep our community coming back
                  for more.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800&fit=crop"
                alt="Coffee shop interior"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-coffee-600 text-coffee-100 px-4 py-2 rounded-lg font-semibold">
                Est. 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To craft exceptional coffee experiences that bring people together, support sustainable farming communities,
              and inspire coffee lovers to discover the artistry behind every cup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Coffee beans and brewing equipment"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-coffee-50 dark:bg-coffee-900 p-8 rounded-2xl dark:shadow-gray-800">
                <h3 className="text-2xl font-bold text-coffee-800 dark:text-coffee-200 mb-4">Quality Without Compromise</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe great coffee starts with great beans. That's why we work directly with farmers
                  who share our commitment to quality, sustainability, and fair practices. Every bean is
                  carefully selected, roasted to perfection, and brewed with precision.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl dark:shadow-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Building Community</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  More than a coffee shop, we're a gathering place. Whether you're meeting friends,
                  working remotely, or simply need a moment of peace, our space is designed to welcome
                  and inspire connections that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-coffee-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-coffee-primary mb-4">Our Values</h2>
            <p className="text-xl text-coffee-text max-w-2xl mx-auto leading-relaxed">
              Every decision we make is guided by our core values that define who we are and how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-coffee-warm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-coffee-primary mb-3">{value.title}</h3>
                <p className="text-coffee-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-coffee-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-coffee-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-coffee-text max-w-3xl mx-auto">
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-coffee-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-coffee-primary mb-2">{member.name}</h3>
                  <p className="text-coffee-accent font-medium mb-3">{member.role}</p>
                  <p className="text-coffee-text text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, i) => (
                      <span key={i} className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-coffee-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 text-orange-100 leading-relaxed">
            Ready to taste the passion and craftsmanship that goes into every cup?
            Visit us today and become part of our coffee community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-coffee-700 dark:text-coffee-800 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Find Our Location
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-coffee-700 dark:hover:text-coffee-800 transition-all duration-300">
              View Our Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

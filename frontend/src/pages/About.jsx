import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Mike Johnson',
      role: 'AI Engineer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Our Mission',
      description: 'To empower professionals with AI-driven tools that streamline their workflow and enhance productivity.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Our Vision',
      description: 'To become the leading platform for AI-powered report generation, setting new standards in the industry.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Our Values',
      description: 'We believe in innovation, quality, and user-centric design to deliver the best possible experience.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About AI Report Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize the way professionals create and manage their reports
            using the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="text-indigo-600 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              AI Report Generator was born from a simple observation: professionals spend countless
              hours creating and formatting reports, time that could be better spent on strategic
              work. We saw an opportunity to leverage artificial intelligence to automate and
              streamline this process.
            </p>
            <p className="mb-4">
              Our journey began in 2023 when a team of AI enthusiasts and industry experts came
              together with a shared vision. We combined our expertise in natural language
              processing, machine learning, and user experience design to create a platform that
              would transform report generation.
            </p>
            <p>
              Today, we're proud to serve thousands of professionals across various industries,
              helping them save time and create better reports. Our commitment to innovation and
              user satisfaction drives us to continuously improve our platform and expand its
              capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
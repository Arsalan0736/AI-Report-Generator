import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Zap, Shield, GraduationCap, BookOpen, Clock } from 'lucide-react';
import Marquee from '../components/Marquee';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'University Compliant',
      description: 'Generate reports that perfectly align with Mumbai University\'s project report guidelines and standards.',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Year-Specific Templates',
      description: 'Access specialized templates for 1st, 2nd, and 3rd year project reports with appropriate complexity levels.',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Time-Saving',
      description: 'Complete your project reports in minutes instead of days, focusing more on your actual project work.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Marquee */}
      <div className="bg-indigo-600 text-white py-2">
        <Marquee 
          text="✨ Create Professional Reports in Minutes ✨ Save Time & Get Better Grades ✨ Perfect for 1st, 2nd, and 3rd year students ✨"
          speed={30}
          className="text-sm font-medium"
        />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Mumbai University Project Reports Made Easy
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Create professional project reports for your Mumbai University assignments.
                Perfect for 1st, 2nd, and 3rd year students. Save time and get better grades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/generate"
                  className="btn btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg min-w-[200px]"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn btn-secondary px-8 py-4 text-lg min-w-[200px]"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-xl h-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* 3D Document Model */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg transform rotate-12 shadow-lg">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg">
                          <div className="p-6 space-y-4">
                            <div className="h-4 bg-indigo-200 rounded w-3/4"></div>
                            <div className="h-4 bg-indigo-200 rounded"></div>
                            <div className="h-4 bg-indigo-200 rounded w-5/6"></div>
                            <div className="h-4 bg-indigo-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg transform -rotate-6 shadow-lg">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg">
                          <div className="p-6 space-y-4">
                            <div className="h-4 bg-indigo-300 rounded w-3/4"></div>
                            <div className="h-4 bg-indigo-300 rounded"></div>
                            <div className="h-4 bg-indigo-300 rounded w-5/6"></div>
                            <div className="h-4 bg-indigo-300 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-lg shadow-lg">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg">
                          <div className="p-6 space-y-4">
                            <div className="h-4 bg-indigo-400 rounded w-3/4"></div>
                            <div className="h-4 bg-indigo-400 rounded"></div>
                            <div className="h-4 bg-indigo-400 rounded w-5/6"></div>
                            <div className="h-4 bg-indigo-400 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Report Generator?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed specifically for Mumbai University students to create professional project reports with ease.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Create Your{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Project Report?
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                  Start generating professional project reports that meet Mumbai University standards.
                  Perfect for all year students - from first year to final year projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/generate"
                    className="btn btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg min-w-[200px] group"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-secondary px-8 py-4 text-lg min-w-[200px]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Content - 3D Card Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="space-y-6">
                    {/* Feature List */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Format</h3>
                        <p className="text-gray-600">Follows Mumbai University's official project report guidelines</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Generation</h3>
                        <p className="text-gray-600">Create complete reports in minutes, not hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
                        <p className="text-gray-600">Get better grades with professionally formatted reports</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
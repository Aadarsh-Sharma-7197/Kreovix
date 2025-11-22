import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Video, 
  Palette, 
  Share2, 
  Edit3,
  ArrowRight,
  Check,
  Star,
  Play,
  Eye,
  Zap,
  Target,
  Users,
  Award,
  Clock,
  TrendingUp,
  MousePointer,
  Sparkles,
  Code
} from 'lucide-react';
import Footer from '../components/Footer';

const services = [
  {
    id: 1,
    icon: Share2,
    title: "Social Media Marketing",
    shortDesc: "Strategic campaigns that amplify your brand across all platforms",
    fullDesc: "Our social media marketing services combine creative storytelling with data-driven strategies to build authentic connections with your audience. We create engaging content, manage your online presence, and drive meaningful interactions that convert followers into loyal customers.",
    features: [
      "Content Strategy & Planning",
      "Community Management", 
      "Paid Social Advertising",
      "Analytics & Reporting",
      "Influencer Partnerships",
      "Brand Voice Development"
    ],
    packages: [
      { name: "Starter", price: "$49", period: "/month" },
      { name: "Professional", price: "$199", period: "/month" },
      { name: "Enterprise", price: "$399", period: "/month" }
    ],
    stats: { projects: "70+", satisfaction: "98%", growth: "150%" },
    color: "from-neonPurple to-pink-500",
    gradient: "from-purple-900/20 to-pink-900/20",
    process: ["Strategy", "Content Creation", "Publishing", "Analytics"]
  },
  {
    id: 2,
    icon: Palette,
    title: "Graphic Design",
    shortDesc: "Visual storytelling that captures attention and drives engagement",
    fullDesc: "Our graphic design services bring your brand's personality to life through compelling visual narratives. From brand identity to marketing materials, we create designs that not only look stunning but also communicate your message effectively and memorably.",
    features: [
      "Brand Identity Design",
      "Marketing Collaterals",
      "Digital Graphics", 
      "Print Design",
      "Packaging Design",
      "UI/UX Design"
    ],
    packages: [
      { name: "Basic", price: "$99", period: "/project" },
      { name: "Premium", price: "$199", period: "/project" },
      { name: "Complete", price: "$299", period: "/project" }
    ],
    stats: { projects: "100+", satisfaction: "99%", growth: "200%" },
    color: "from-neonTeal to-blue-500",
    gradient: "from-teal-900/20 to-blue-900/20",
    process: ["Discovery", "Concept", "Design", "Refinement"]
  },
  {
    id: 3,
    icon: Edit3,
    title: "Video Editing",
    shortDesc: "Post-production magic that brings your vision to life",
    fullDesc: "Transform raw footage into cinematic masterpieces with our professional video editing services. We combine technical expertise with creative vision to deliver polished content that engages viewers and elevates your brand's storytelling.",
    features: [
      "Color Grading & Correction",
      "Motion Graphics",
      "Audio Enhancement",
      "Visual Effects", 
      "Multi-Camera Editing",
      "Format Optimization"
    ],
    packages: [
      { name: "Quick Edit", price: "$79", period: "/video" },
      { name: "Pro Edit", price: "$149", period: "/video" },
      { name: "Cinematic", price: "$299", period: "/video" }
    ],
    stats: { projects: "500+", satisfaction: "97%", growth: "180%" },
    color: "from-purple-500 to-neonPurple",
    gradient: "from-purple-900/20 to-indigo-900/20",
    process: ["Review", "Edit", "Effects", "Delivery"]
  },
  {
    id: 4,
    icon: Video,
    title: "Videography", 
    shortDesc: "Cinematic content creation that tells compelling stories",
    fullDesc: "Our videography services capture the essence of your brand through stunning visual narratives. From concept to final cut, we create high-quality video content that resonates with your audience and drives action.",
    features: [
      "Corporate Videos",
      "Product Showcases",
      "Event Coverage",
      "Documentary Style",
      "Commercial Production",
      "Live Streaming"
    ],
    packages: [
      { name: "Half Day", price: "$299", period: "/shoot" },
      { name: "Full Day", price: "$699", period: "/shoot" },
      { name: "Production", price: "$999", period: "/shoot" }
    ],
    stats: { projects: "150+", satisfaction: "100%", growth: "220%" },
    color: "from-teal-500 to-neonTeal", 
    gradient: "from-teal-900/20 to-cyan-900/20",
    process: ["Planning", "Shooting", "Editing", "Delivery"]
  },
  {
    id: 5,
    icon: Camera,
    title: "Photography",
    shortDesc: "Professional imagery that showcases your brand's essence",
    fullDesc: "Capture the perfect moment with our professional photography services. Whether it's product shots, corporate headshots, or event coverage, we deliver high-quality images that tell your story and showcase your brand in the best light.",
    features: [
      "Product Photography",
      "Corporate Portraits", 
      "Event Photography",
      "Architectural Shots",
      "Lifestyle Photography",
      "Post-Processing"
    ],
    packages: [
      { name: "Essential", price: "$69", period: "/session" },
      { name: "Professional", price: "$129", period: "/session" },
      { name: "Premium", price: "$299", period: "/session" }
    ],
    stats: { projects: "300+", satisfaction: "99%", growth: "190%" },
    color: "from-purple to-cyan-600",
    gradient: "from-purple-900/20 to-cyan-900/20",
    process: ["Concept", "Shoot", "Edit", "Deliver"]
  },
  {
  id: 6,
  icon: Code,
  title: "Web Development",
  shortDesc: "Modern, fast, and responsive websites built to perform.",
  fullDesc: "We develop high-performance websites tailored to your brand. With clean code, smooth UI/UX, and optimized functionality, we ensure your digital presence is powerful, scalable, and conversion-focused.",
  features: [
    "Responsive Web Design",
    "Frontend Development", 
    "Backend Development",
    "API Integration",
    "Database & Authentication",
    "SEO Optimization"
  ],
    packages: [
      { name: "Essential", price: "$159", period: "/session" },
      { name: "Professional", price: "$329", period: "/session" },
      { name: "Premium", price: "$479", period: "/session" }
    ],
    stats: { projects: "50+", satisfaction: "99%", growth: "190%" },
    color: "from-purple to-green-400",
    gradient: "from-purple-900/20 to-green-900/20",
    process: ["Concept", "Shoot", "Edit", "Deliver"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [activePackage, setActivePackage] = useState(0);
  const heroRef = useRef(null);
  const comparisonRef = useRef(null);
  
  const isComparisonInView = useInView(comparisonRef, { once: true, margin: '-100px' });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 mb-20 relative overflow-hidden">
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            initial={{ 
              x: Math.random() * 1200,
              y: Math.random() * 600,
              rotate: 0,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 600,
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-${8 + i * 4} h-${8 + i * 4} border-2 border-neonPurple/30 rounded-full`} />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full flex items-center justify-center animate-glow-pulse"
          >
            <Zap size={40} className="text-white" />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text">
            Our Services
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Comprehensive creative solutions designed to elevate your brand 
            and captivate your audience across every touchpoint.
          </motion.p>

          {/* Service Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedService.id === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'glassmorphism text-gray-300 hover:text-white border border-white/20'
                }`}
              >
                <service.icon size={18} />
                <span className="hidden sm:inline">{service.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Service Detail */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content Side */}
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-lg`}
                >
                  <selectedService.icon size={40} className="text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-400">{selectedService.shortDesc}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Process Steps */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target size={20} className="text-neonTeal" />
                  Our Process
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedService.process.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${selectedService.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(selectedService.stats).map(([key, value]) => (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    className="text-center glassmorphism p-4 rounded-xl"
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 bg-gradient-to-r ${selectedService.color} rounded-xl font-medium text-white relative overflow-hidden btn-glow`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neonTeal text-neonTeal rounded-xl font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Play size={18} />
                    View Examples
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Visual Side - Feature List & Packages */}
            <div className="space-y-8">
              {/* Features */}
              <div className="glassmorphism p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Check size={24} className="text-neonTeal" />
                  What's Included
                </h3>
                <div className="space-y-4">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${selectedService.color} flex items-center justify-center flex-shrink-0`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Packages */}
              <div className="glassmorphism p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Star size={24} className="text-neonPurple" />
                  Pricing Packages
                </h3>
                <div className="space-y-4">
                  {selectedService.packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.name}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => setActivePackage(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        activePackage === index 
                          ? `bg-gradient-to-r ${selectedService.color} shadow-lg` 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">{pkg.name}</div>
                          <div className="text-sm text-gray-300">Perfect for getting started</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{pkg.price}</div>
                          <div className="text-sm text-gray-300">{pkg.period}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Service Comparison Grid */}
      <section ref={comparisonRef} className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isComparisonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Compare All Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect service for your needs with our detailed comparison
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isComparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedService(service)}
              className={`group cursor-pointer glassmorphism p-8 rounded-2xl transition-all duration-500 ${
                selectedService.id === service.id 
                  ? `border-2 bg-gradient-to-br ${service.gradient}` 
                  : 'border border-white/10 hover:border-neonPurple/30'
              }`}
            >
              {/* Service Header */}
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.shortDesc}</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Projects:</span>
                  <span className="text-neonTeal font-semibold">{service.stats.projects}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Satisfaction:</span>
                  <span className="text-neonPurple font-semibold">{service.stats.satisfaction}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Growth:</span>
                  <span className="gradient-text font-semibold">{service.stats.growth}</span>
                </div>
              </div>

              {/* Starting Price */}
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-1">Starting at</div>
                <div className="text-2xl font-bold gradient-text">
                  {service.packages[0].price}
                </div>
                <div className="text-sm text-gray-400">{service.packages[0].period}</div>
              </div>

              {/* Select Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedService.id === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {selectedService.id === service.id ? (
                  <span className="flex items-center justify-center gap-2">
                    <Eye size={16} />
                    Selected
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <MousePointer size={16} />
                    Select Service
                  </span>
                )}
              </motion.button>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl -z-10`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-6">
          {[
            {
              q: "How long does a typical project take?",
              a: "Project timelines vary depending on the service and complexity. Most projects are completed within 1-4 weeks."
            },
            {
              q: "Do you offer revisions?",
              a: "Yes! All our packages include multiple rounds of revisions to ensure you're completely satisfied with the final result."
            },
            {
              q: "Can you work with my existing brand guidelines?",
              a: "Absolutely! We work closely with your brand guidelines to ensure consistency across all deliverables."
            },
            {
              q: "What's included in your packages?",
              a: "Each service has different package tiers with varying features. Check the detailed breakdown above for specific inclusions."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neonPurple/10 to-neonTeal/10" />
          <div className="relative z-10">
            <Sparkles size={48} className="mx-auto mb-6 gradient-text" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" >              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-4 text-lg"
              >
                Schedule Consultation
              </motion.button>
            </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
};

export default Services;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Palette, 
  Share2, 
  Edit3,
  ArrowRight,
  Play,
  Eye,
} from 'lucide-react';

/* -------------------------------------------------------
   SERVICES DATA
   (kept inside same file as requested)
------------------------------------------------------- */
const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic campaigns that amplify your brand across all platforms with data-driven content that converts.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"],
    color: "from-neonPurple to-pink-500",
    delay: 0.08
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual storytelling that captures attention and drives engagement through stunning, purposeful design.",
    features: ["Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design"],
    color: "from-neonTeal to-blue-500",
    delay: 0.12
  },
  {
    icon: Edit3,
    title: "Video Editing",
    description: "Post-production magic that brings your vision to life with cinematic quality and creative flair.",
    features: ["Color Grading", "Motion Graphics", "Audio Enhancement", "Visual Effects"],
    color: "from-purple-500 to-neonPurple",
    delay: 0.16
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic content creation that tells compelling stories and showcases your brand beautifully.",
    features: ["Corporate Videos", "Product Showcases", "Event Coverage", "Commercial Production"],
    color: "from-teal-500 to-neonTeal",
    delay: 0.20
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional imagery that showcases your brand's essence and captures perfect moments.",
    features: ["Product Photography", "Corporate Portraits", "Event Photography", "Lifestyle Shots"],
    color: "from-neonPurple to-neonTeal",
    delay: 0.24
  }
];

/* -------------------------------------------------------
   MAIN SECTION
------------------------------------------------------- */
const ServicesScroll = ({ setCursorVariant }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-5 gradient-text">
          Our Creative Arsenal
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From concept to creation, we deliver comprehensive digital solutions 
          that elevate your brand and captivate your audience.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-32">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
            setCursorVariant={setCursorVariant}
          />
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------
   SERVICE CARD (OPTIMIZED)
------------------------------------------------------- */
const ServiceCard = ({ service, index, setCursorVariant }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: service.delay, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ${
        isEven ? "" : "lg:grid-flow-col-dense"
      }`}
    >

      {/* ----------------- LEFT SIDE (CONTENT) ----------------- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: service.delay + 0.15 }}
        className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >

        {/* Icon Block */}
        <motion.div
          whileHover={{ rotate: 25, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
        >
          <service.icon size={40} className="text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: service.delay + 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <div className="w-2 h-2 bg-neonTeal rounded-full" />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-5">
          
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            className={`px-6 py-3 bg-gradient-to-r ${service.color} rounded-xl font-medium text-white shadow-lg`}
          >
            <span className="flex items-center gap-2">
              Learn More
              <ArrowRight size={16} />
            </span>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setCursorVariant("button")}
            onMouseLeave={() => setCursorVariant("default")}
            className="px-6 py-3 border-2 border-neonTeal text-neonTeal rounded-xl font-medium hover:bg-neonTeal hover:text-background transition-all"
          >
            <span className="flex items-center gap-2">
              <Eye size={16} />
              View Portfolio
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* ----------------- RIGHT SIDE (VISUAL) ----------------- */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: service.delay + 0.25 }}
        className={`relative group ${isEven ? "lg:order-2" : "lg:order-1"}`}
        onMouseEnter={() => setCursorVariant("button")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        {/* Visual Container */}
        <div className="relative aspect-square glassmorphism rounded-3xl p-8 overflow-hidden shadow-xl">

          {/* Soft Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-all duration-500`} />

          {/* Floating Glow Circle */}
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 flex items-center justify-center`}
          >
            <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${service.color} opacity-20`} />
          </motion.div>

          {/* Center Icon */}
          <motion.div
            whileHover={{ scale: 1.25, rotate: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl`}
          >
            <service.icon size={48} className="text-white" />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8"
          >
            <div className="text-center">
              <Play size={24} className="text-white mx-auto mb-1" />
              <span className="text-white text-xs tracking-wide">Preview Work</span>
            </div>
          </motion.div>

        </div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: service.delay + 0.5 }}
          className="absolute -bottom-4 -right-4 glassmorphism rounded-xl p-4 shadow-lg"
        >
          <p className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
            {100 + index * 50}+
          </p>
          <p className="text-xs text-gray-400">Projects</p>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default ServicesScroll;

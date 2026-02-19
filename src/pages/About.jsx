import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Star, 
  Play,
  Camera,
  Video,
  Palette,
  Edit3,
  Clock,
  Shield,
  Lightbulb,
  Coffee
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import amitImg from "../assets/amit.jpg";
import aadarshImg from "../assets/aadarsh.jpg";
import abhilashaImg from "../assets/abhilasha.jpg";
import storyImg from "../assets/story.jpg";

const About = ({ setCursorVariant }) => {
  const [activeValue, setActiveValue] = useState(0);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Section visibility
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });

  // Company values
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and explore new creative possibilities to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Passion Driven", 
      description: "Every project is infused with genuine passion and dedication to create something truly exceptional.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Your vision and success are at the center of everything we do. We listen, understand, and deliver.",
      color: "from-neonTeal to-blue-500"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every deliverable meets the highest standards of craftsmanship.",
      color: "from-neonPurple to-purple-600"
    }
  ];

  // Auto-cycle values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [values.length]);



  // Team members
  const team = [
    {
      name: "Amit Kumar Yadav",
      role: "Creative Director & Founder",
      image: amitImg,
      bio: "Visionary leader with 10+ years in creative direction and brand strategy.",
      skills: ["Creative Direction", "Brand Strategy", "Leadership"]
    },
    {
      name: "Aadarsh Sharma",
      role: "Developer",
      image: aadarshImg,
      bio: "Developer focused on creating efficient and user friendly web solutions.",
      skills: ["Full Stack"]
    },
    {
      name: "Abhilasha Sharma",
      role: "Developer",
      image: abhilashaImg,
      bio: "Developer who loves building smooth, modern, and user focused web expriences.",
      skills: ["Frontend"]
    },
  ];

  // Company stats
  const stats = [
    { number: "100+", label: "Happy Clients", icon: Users, color: "from-neonPurple to-pink-500" },
    { number: "1K+", label: "Projects Completed", icon: Target, color: "from-neonTeal to-blue-500" },
    { number: "5+", label: "Years Experience", icon: Clock, color: "from-orange-500 to-red-500" },
    { number: "98%", label: "Client Satisfaction", icon: Star, color: "from-green-500 to-teal-500" },
    { number: "24/7", label: "Support Available", icon: Shield, color: "from-blue-500 to-indigo-500" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neonTeal/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, scale: heroScale }}
        className="min-h-screen flex items-center justify-center relative pt-5"
      >
        <div className="max-w-7xl pt-15 mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className=""
          >
            <motion.div
              className="inline-flex items-center gap-3 glassmorphism px-6 py-3 rounded-full border border-neonPurple/30 mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(162, 89, 255, 0.2)',
                  '0 0 40px rgba(162, 89, 255, 0.4)',
                  '0 0 20px rgba(162, 89, 255, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart size={20} className="text-neonTeal" />
              <span className="text-white font-medium">About Kreovix</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              <motion.span
                className=" overflow-hidden"
                initial={{ y: "100%" }}
                animate={isHeroInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="gradient-text mr-5">Creating</span>
              </motion.span>
              <motion.span
                className=" overflow-hidden"
                initial={{ y: "100%" }}
                animate={isHeroInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="gradient-text">Magic</span>
              </motion.span>
              <motion.span
                className=" overflow-hidden"
                initial={{ y: "100%" }}
                animate={isHeroInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <span className="block text-white">Together</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto pt-6 leading-relaxed"
            >
              We are a passionate team of creators, storytellers, and innovators dedicated to 
              transforming your <span className="gradient-text font-semibold">wildest ideas</span> into 
              stunning visual experiences that captivate and convert.
            </motion.p>
          </motion.div>

          {/* Floating Elements - Minimal */}
          <div className="absolute inset-0 pointer-events-none">
            {[Camera, Video, Palette, Edit3].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute opacity-5"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + index * 15}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6 + index * 2,
                  repeat: Infinity,
                  delay: index * 1,
                  ease: "easeInOut"
                }}
              >
                <Icon size={48} className="text-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        ref={storyRef}
        className="py relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div>
                <motion.h2
                  className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={isStoryInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Our Story
                </motion.h2>
                <div className="w-20 h-1 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full mb-8" />
              </div>

              <motion.div
                className="space-y-6 text-lg text-gray-300 leading-relaxed"
                variants={containerVariants}
                initial="hidden"
                animate={isStoryInView ? "visible" : "hidden"}
              >
                <motion.p variants={itemVariants}>
                  Founded in 2019, <span className="text-neonTeal font-semibold">Kreovix</span> began as a small 
                  creative studio with a big dream: to help brands tell their stories through 
                  <span className="gradient-text font-semibold"> compelling visual content</span>.
                </motion.p>

                <motion.p variants={itemVariants}>
                  What started as a passion project between college friends has grown into a 
                  <span className="text-neonPurple font-semibold"> award-winning creative agency</span> trusted 
                  by startups and Fortune 500 companies alike.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Today, we are proud to have created over <span className="gradient-text font-bold">2,000 videos</span>, 
                  designed <span className="gradient-text font-bold">500+ brands</span>, and helped our clients 
                  generate over <span className="gradient-text font-bold">500 million views</span> across all platforms.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center gap-6"
              >
                <Link to="/portfolio"> 
                <motion.button
                  className="px-8 py-4 border-white rounded-2xl font-medium text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
                >
                  Our Portfolio
                </motion.button>
              </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={isStoryInView ? "visible" : "hidden"}
              className="relative"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden glassmorphism border border-white/20"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={storyImg}
                  alt="Our Creative Journey"
                  className="w-full h-full object-cover"
                />

                {/* Floating Stats */}
               

                
              </motion.div>

              {/* Background Glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-neonPurple/30 to-neonTeal/30 rounded-3xl blur-2xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The core principles that guide everything we do and drive our passion for excellence.
            </p>
          </motion.div>

          {/* Interactive Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Values List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isValuesInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeValue === index 
                      ? 'glassmorphism border-neonPurple/50' 
                      : 'border border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveValue(index)}
                  onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${value.color}`}
                      animate={{
                        scale: activeValue === index ? [1, 1.1, 1] : 1,
                        rotate: activeValue === index ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Active Value Display */}
            <motion.div
              className="relative flex items-center justify-center"
              key={activeValue}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative w-80 h-80 glassmorphism rounded-3xl border border-white/20 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 50px rgba(162, 89, 255, 0.3)',
                    '0 0 80px rgba(0, 245, 212, 0.4)',
                    '0 0 50px rgba(162, 89, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className={`w-32 h-32 rounded-3xl flex items-center justify-center bg-gradient-to-r ${values[activeValue].color}`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                 
                </motion.div>

                {/* Orbiting Elements - Fixed */}
                {Array.from({ length: 6 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-neonTeal rounded-full"
                    style={{
                      transformOrigin: '160px 160px',
                    }}
                    animate={{
                      rotate: [i * 60, i * 60 + 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our achievements and milestones that showcase our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glassmorphism p-8 rounded-2xl border border-white/10 hover:border-neonPurple/30 transition-all duration-500 group"
                whileHover={{ y: -8, scale: 1.05 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon size={28} className="text-white" />
                </motion.div>
                
                <motion.div
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <p className="text-gray-300 text-sm font-medium group-hover:text-neonTeal transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Meet The Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The creative minds behind every project, bringing diverse skills and fresh perspectives.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glassmorphism rounded-3xl overflow-hidden border border-white/10 hover:border-neonPurple/30 transition-all duration-500"
                whileHover={{ y: -8, rotateY: 5 }}
                onMouseEnter={() => setCursorVariant && setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant && setCursorVariant('default')}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm leading-relaxed mb-3">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-white/20 rounded-full text-xs text-white backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-neonTeal font-medium mb-4">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-neonPurple to-neonTeal rounded-3xl flex items-center justify-center"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Coffee size={36} className="text-white" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Let&apos;s Create Something Amazing
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Let&apos;s grab a coffee and discuss 
              how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {/* Primary Button → Contact */}
              <Link to="/contact">
                <motion.button
                  className="
                    px-8 py-3 rounded-xl font-medium text-base
                    bg-gradient-to-r from-neonPurple to-neonTeal 
                    border border-white/20
                    shadow-lg hover:shadow-neonPurple/30
                    transition-all duration-300
                    font-family-poppins
                  "
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setCursorVariant?.('button')}
                  onMouseLeave={() => setCursorVariant?.('default')}
                >
                  Start Your Project
                </motion.button>
              </Link>

              {/* Secondary Button → Portfolio */}
              <Link to="/portfolio">
                <motion.button
                  className="
                    px-8 py-3 rounded-xl font-medium text-base text-white
                    glassmorphism 
                    border border-white/30 
                    hover:border-neonTeal/60 hover:text-neonTeal
                    transition-all duration-300
                    font-family-poppins
                  "
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setCursorVariant?.('button')}
                  onMouseLeave={() => setCursorVariant?.('default')}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

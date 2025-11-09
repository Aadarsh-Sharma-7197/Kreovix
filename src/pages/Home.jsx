import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Volume2, 
  VolumeX,
  Video, 
  Zap,
  Sparkles,
  Eye,
  Heart,
  MessageCircle,
  TrendingUp,
  Rocket
} from 'lucide-react';
import ServicesScroll from '../components/ServicesScroll';
import Footer from '../components/Footer';
import OptimizedBackground from '../components/OptimizedBackground';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHeroAnimated, setIsHeroAnimated] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  
  const controls = useAnimation();
  const statsControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isServicesInView) {
      controls.start('visible');
    }
  }, [isServicesInView, controls]);

  useEffect(() => {
    if (isStatsInView) {
      statsControls.start('visible');
    }
  }, [isStatsInView, statsControls]);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients', color: 'from-neonPurple to-pink-500' },
    { icon: Video, number: '2K+', label: 'Videos Created', color: 'from-neonTeal to-blue-500' },
    { icon: Award, number: '50+', label: 'Awards Won', color: 'from-purple-500 to-neonPurple' },
    { icon: Star, number: '4.9', label: 'Client Rating', color: 'from-neonPurple to-neonTeal' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      <OptimizedBackground />

      {/* Hero Section - MORE SPACIOUS */}
      <motion.section 
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHeroAnimated ? "visible" : "hidden"}
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 lg:py-32"
      >
        {/* Floating Creative Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: Sparkles, delay: 0, x: '10%', y: '15%' },
            { icon: Zap, delay: 0.8, x: '85%', y: '20%' },
            { icon: Heart, delay: 1.6, x: '15%', y: '75%' },
            { icon: Eye, delay: 2.4, x: '80%', y: '70%' },
            { icon: MessageCircle, delay: 3.2, x: '50%', y: '10%' },
            { icon: TrendingUp, delay: 4, x: '25%', y: '45%' },
            { icon: Rocket, delay: 4.8, x: '70%', y: '40%' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute opacity-10"
              style={{ left: item.x, top: item.y }}
              initial={{ opacity: 0, scale: 0, filter: "blur(20px)" }}
              animate={{ 
                opacity: [0.05, 0.2, 0.05], 
                scale: [0.5, 1.2, 0.8, 1], 
                rotate: [0, 360, 720],
                filter: ["blur(20px)", "blur(0px)", "blur(5px)", "blur(0px)"],
                y: [-20, 20, -10, 0],
                x: [-10, 10, -5, 0]
              }}
              transition={{
                duration: 12,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <item.icon size={40} className="text-neonPurple" />
            </motion.div>
          ))}

          {/* Gradient Blobs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10 blur-3xl"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                left: `${10 + i * 25}%`,
                top: `${5 + i * 20}%`,
              }}
              initial={{
                background: `radial-gradient(circle, ${i % 2 ? '#A259FF' : '#00F5D4'} 0%, transparent 70%)`,
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: [0, 100, -30, 70, 0],
                y: [0, -70, 100, -50, 0],
                scale: [0, 1, 1.2, 0.8, 1],
                opacity: [0, 0.1, 0.15, 0.08, 0.1]
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
                scale: [0, 1, 0.5, 1, 0],
                opacity: [0, 0.6, 0.3, 0.5, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Content - INCREASED SPACING */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8 lg:px-12">
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-10 lg:pr-10">
            {/* Badge - LARGER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 glassmorphism px-6 py-3 rounded-full border border-neonPurple/30"
            >
              <Sparkles size={20} className="text-neonTeal" />
              <span className="text-base text-gray-300">Welcome to Kreovix</span>
            </motion.div>

            {/* Tagline - LARGER WITH MORE SPACE */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins leading-[1.1] tracking-tight">
                {["Create.", "Captivate.", "Convert."].map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-4 relative"
                    initial={{ 
                      opacity: 0, 
                      rotateX: -90, 
                      z: -200,
                      scale: 0.3,
                      filter: "blur(20px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      rotateX: 0, 
                      z: 0,
                      scale: 1,
                      filter: "blur(0px)"
                    }}
                    transition={{
                      duration: 1.2,
                      delay: wordIndex * 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {word.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block gradient-text relative"
                        animate={{
                          textShadow: [
                            '0 0 15px rgba(162, 89, 255, 0.4)',
                            '0 0 30px rgba(0, 245, 212, 0.6)',
                            '0 0 20px rgba(162, 89, 255, 0.5)',
                            '0 0 25px rgba(0, 245, 212, 0.5)',
                            '0 0 15px rgba(162, 89, 255, 0.4)'
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: charIndex * 0.1,
                          ease: "easeInOut"
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.div variants={itemVariants} className="space-y-5">
                <motion.p 
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                  animate={{ 
                    opacity: [0.7, 1, 0.8, 1],
                    y: [0, -2, 0, -1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Transform your ideas into powerful visual stories that drive results.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl text-gray-400 leading-relaxed"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.6, 0.9],
                    y: [0, -1, 0, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                >
                  We help brands and creators deliver content that 
                  <span className="gradient-text font-semibold"> engages, inspires, and converts.</span>
                </motion.p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - LARGER */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 20px 40px rgba(162, 89, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full font-semibold text-lg overflow-hidden shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Project
                  <motion.div
                    animate={{ 
                      x: [0, 4, -1, 3, 0],
                      rotate: [0, 10, -8, 4, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={22} />
                  </motion.div>
                </span>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-12"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group px-10 py-5 glassmorphism border-2 border-neonTeal/50 rounded-full font-semibold text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 text-neonTeal group-hover:text-white transition-colors">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1.05, 1.15, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Play size={22} />
                  </motion.div>
                  Watch Reel 
                </span>
              </motion.button>
            </motion.div>

            {/* Performance Indicators - MORE SPACE */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-8 text-sm text-gray-400"
            >
              {[
                { label: "50+ Projects", color: "neonTeal" },
                { label: "98% Success", color: "neonPurple" },
                { label: "24/7 Support", color: "gradient" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <motion.div 
                    className={`w-2 h-2 rounded-full ${
                      item.color === 'gradient' 
                        ? 'bg-gradient-to-r from-neonPurple to-neonTeal' 
                        : `bg-${item.color}`
                    }`}
                    animate={{ 
                      scale: [1, 1.6, 1.1, 1.4, 1],
                      opacity: [0.4, 1, 0.6, 0.9, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div variants={itemVariants} className="relative lg:block hidden">
            <motion.div
              className="relative rounded-xl overflow-hidden glassmorphism border border-white/10 shadow-xl"
              whileHover={{ 
                rotateY: 2,
                rotateX: 1,
                scale: 1.01
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="relative aspect-video overflow-hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onLoadedData={handleVideoLoad}
                  poster="https://via.placeholder.com/800x450/A259FF/FFFFFF?text=Kreovix+Showreel"
                >
                  <source src="/Comp 1.mp4" type="video/mp4" />
                </video>

                {!isVideoLoaded && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 to-neonTeal/20 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full"
                    />
                  </motion.div>
                )}

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white border border-white/30 mb-1.5">
                      <Play size={20} className="ml-0.5" />
                    </div>
                    <p className="text-white text-xs">Auto-playing</p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleMute}
                className="absolute top-3 right-3 w-9 h-9 glassmorphism rounded-full flex items-center justify-center text-white border border-white/20"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </motion.button>

              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-neonPurple/30 to-neonTeal/30 rounded-xl blur-lg -z-10"
                animate={{ 
                  opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
                  scale: [1, 1.03, 1.01, 1.04, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 3, type: "spring" }}
              className="absolute -bottom-4 -left-4 glassmorphism rounded-lg p-4 border border-white/10"
            >
              <motion.div 
                className="text-2xl font-bold gradient-text flex items-center gap-1"
                animate={{ scale: [1, 1.15, 1.05, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Video size={16} className="text-neonTeal" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 3.5, type: "spring" }}
              className="absolute -top-4 -right-4 glassmorphism rounded-lg p-4 border border-white/10"
            >
              <motion.div 
                className="text-2xl font-bold gradient-text"
                animate={{ scale: [1, 1.1, 1.03, 1.15, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Star size={16} className="text-neonTeal fill-current" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          onClick={scrollToServices}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-neonTeal transition-colors group"
          >
            <span className="text-sm mb-4 group-hover:gradient-text transition-all">
              Explore More
            </span>
            <div className="p-4 rounded-full border border-gray-400/20 group-hover:border-neonTeal/60 transition-colors glassmorphism">
              <ChevronDown size={24} />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats Section - MORE SPACE */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glassmorphism p-10 rounded-xl border border-white/10 hover:border-neonPurple/30 transition-all duration-500"
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <stat.icon size={28} className="text-white" />
                </motion.div>
                
                <motion.div
                  className="text-4xl font-bold gradient-text mb-2"
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
                
                <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="py-24 relative"
      >
        <ServicesScroll />
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-10 gradient-text">
              Ready to Create Magic?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s transform your vision into reality. Start your project today.
            </p>
            
            <motion.button
              className="px-12 py-6 bg-gradient-to-r from-neonPurple to-neonTeal rounded-full font-semibold text-lg shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

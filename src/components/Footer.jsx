import React from 'react';
import { motion } from 'framer-motion';
import { 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter,
  Zap,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      icon: Youtube, 
      name: 'YouTube', 
      link: 'https://www.youtube.com/@thekreovix',
      color: 'hover:text-red-500'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      link: 'https://www.instagram.com/thekreovix/',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      link: 'https://twitter.com/kreovix',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/company/kreovix/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-background/95 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neonPurple/3 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-neonTeal/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-neonPurple to-neonTeal rounded-2xl flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    borderRadius: ["30%", "50%", "30%"]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap size={24} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Kreovix</h3>
                  <p className="text-gray-400 text-sm">Creative Studio</p>
                </div>
              </motion.div>

              <p className="text-gray-300 leading-relaxed max-w-sm">
                Transforming ideas into stunning visual experiences that captivate audiences 
                and drive results.
              </p>

              {/* CTA Button */}
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neonPurple to-neonTeal rounded-xl font-medium text-white hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={16} />
              </motion.a>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-neonTeal transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight size={14} className="group-hover:text-neonPurple transition-colors" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Follow Us</h4>
              <p className="text-gray-400 text-sm">
                Stay updated with our latest projects and creative insights.
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glassmorphism rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center text-gray-400 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Contact Link */}
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-400"
                whileHover={{ x: 3 }}
              >
                <span>Questions? </span>
                <motion.a
                  href="/contact"
                  className="text-neonTeal hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  Get in touch
                  <ExternalLink size={12} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2024 Kreovix. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={14} className="text-red-500" />
                </motion.div>
                <span>for creators worldwide</span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <motion.a
                  href="/privacy"
                  className="hover:text-neonTeal transition-colors"
                  whileHover={{ y: -1 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/terms"
                  className="hover:text-neonTeal transition-colors"
                  whileHover={{ y: -1 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

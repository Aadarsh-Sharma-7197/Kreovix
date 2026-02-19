import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Users,
  Zap,
  Shield,
  Heart,
  Copy,
  ExternalLink,
  FileText
} from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  
  const formRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' });
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showMessage = (type, message) => {
    setStatusType(type);
    setStatusMessage(message);
    setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, type === 'error' ? 5000 : 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('teamkreovix@gmail.com');
    showMessage('success', '📧 Email copied to clipboard!');
  };

  // WhatsApp Function - CORRECTED
  const sendWhatsAppMessage = () => {
    if (!formData.name || !formData.projectType || !formData.message) {
      showMessage('error', '⚠️ Please fill in Name, Project Type, and Message.');
      return;
    }

    const message = `Hi Kreovix Team! 👋

🎬 *New Project Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Project Type:* ${formData.projectType}

*Project Details:*
${formData.message}

Looking forward to working with you! 🚀`;

    const phoneNumber = '919871971874';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    showMessage('success', '✅ WhatsApp opened! Send your message.');
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  // Fillout Form Function
  const openFilloutForm = () => {
    window.open('https://forms.fillout.com/t/7hHU67r9UCus', '_blank');
    showMessage('success', '📝 Form opened in new tab!');
  };

  // Email Function
  const sendEmail = () => {
    const subject = `New Project: ${formData.projectType || 'Inquiry'}`;
    const body = `Hello Kreovix Team,

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Details:
${formData.message}

Best regards,
${formData.name}`;

    window.location.href = `mailto:teamkreovix@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showMessage('success', '📧 Email client opened!');
  };

  const projectTypes = [
    'YouTube Video Editing',
    'Instagram Reels & Stories',
    'Motion Graphics & Animation',
    'Corporate Video Production',
    'Social Media Management',
    'Brand Design & Identity',
    'Photography Services',
    'Complete Brand Package',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'teamkreovix@gmail.com',
      link: 'mailto:teamkreovix@gmail.com',
      description: 'Send detailed message',
      copyable: true
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 98719 71874',
      link: 'https://api.whatsapp.com/send?phone=919871971874&text=Hi%20Kreovix!%20I%27d%20like%20to%20discuss%20a%20project.',
      description: 'Instant messaging'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@thekreovix',
      link: 'https://www.instagram.com/thekreovix/',
      description: 'DM for quick response'
    }
  ];

  const socialLinks = [
    { 
      icon: Youtube, 
      name: 'YouTube', 
      link: 'https://www.youtube.com/@thekreovix',
      color: 'from-red-500 to-red-600',
      handle: '@thekreovix'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      link: 'https://www.instagram.com/thekreovix/',
      color: 'from-pink-500 to-purple-600',
      handle: '@thekreovix'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      link: 'https://twitter.com/kreovix',
      color: 'from-blue-400 to-blue-600',
      handle: '@kreovix'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/company/kreovix/',
      color: 'from-blue-600 to-blue-700',
      handle: 'Kreovix'
    }
  ];

  const features = [
    { icon: Clock, title: "24-Hour Response", description: "Quick replies" },
    { icon: Shield, title: "Free Consultation", description: "No cost" },
    { icon: Users, title: "Dedicated Team", description: "Personal manager" },
    { icon: Heart, title: "100% Satisfaction", description: "Unlimited revisions" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Background - Minimal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A259FF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#00F5D4]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-[#A259FF]/30 px-6 py-3 rounded-full mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(162, 89, 255, 0.2)',
                  '0 0 40px rgba(162, 89, 255, 0.4)',
                  '0 0 20px rgba(162, 89, 255, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MessageSquare size={20} className="text-[#00F5D4]" />
              <span className="text-white font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-[#A259FF] to-[#00F5D4] bg-clip-text text-transparent">
                Let's Create
              </span>
              <br />
              <span className="text-white">Something Amazing</span>
              <br />
              <span className="bg-gradient-to-r from-[#A259FF] to-[#00F5D4] bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16">
              Ready to transform your content? Let's discuss your vision.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -60 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-[#A259FF] to-[#00F5D4] bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="text-gray-300 mb-6 md:mb-8">Choose your preferred method.</p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-3">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:ring-2 focus:ring-neonTeal/20 focus:outline-none transition-all duration-300 hover:border-white/30"
                        placeholder="XYZ"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-3">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:ring-2 focus:ring-neonTeal/20 focus:outline-none transition-all duration-300 hover:border-white/30"
                        placeholder="xyz@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Project Type *</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white focus:border-neonTeal focus:ring-2 focus:ring-neonTeal/20 focus:outline-none transition-all duration-300 hover:border-white/30 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0A0A0A] text-gray-500">Select a service...</option>
                        {projectTypes.map((type, i) => (
                          <option key={i} value={type} className="bg-[#0A0A0A]">{type}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:ring-2 focus:ring-neonTeal/20 focus:outline-none transition-all duration-300 hover:border-white/30 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="space-y-4">
                    <motion.button
                      onClick={openFilloutForm}
                      className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-medium text-base md:text-lg text-white flex items-center justify-center gap-3 shadow-lg shadow-[#A259FF]/30"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FileText size={20} />
                      Submit via Form
                    </motion.button>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.button
                        onClick={sendWhatsAppMessage}
                        className="px-6 py-3 md:py-4 bg-white/5 backdrop-blur-xl border border-green-500/30 rounded-xl font-medium text-white flex items-center justify-center gap-3 hover:bg-green-500/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle size={20} />
                        WhatsApp
                      </motion.button>

                      <motion.button
                        onClick={sendEmail}
                        className="px-6 py-3 md:py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl font-medium text-white flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Mail size={20} />
                        Email
                      </motion.button>
                    </div>
                  </div>

                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl flex items-center gap-3 border backdrop-blur-md shadow-lg ${
                        statusType === 'success'
                          ? 'bg-green-500/10 border-green-500/20 text-green-300'
                          : 'bg-red-500/10 border-red-500/20 text-red-300'
                      }`}
                    >
                      {statusType === 'success' ? <CheckCircle size={20} className="text-green-400" /> : <AlertCircle size={20} className="text-red-400" />}
                      <span className="font-medium">{statusMessage}</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, x: 60 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Contact Methods */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#A259FF] to-[#00F5D4] bg-clip-text text-transparent">
                  Get in Touch
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#A259FF]/30 transition-all group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r  from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                        <p className="text-[#00F5D4] font-medium mb-1 break-all">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {info.copyable && (
                          <button
                            onClick={copyEmail}
                            className="p-2 bg-white/5 rounded-lg hover:bg-[#A259FF]/20 transition-colors"
                            title="Copy"
                          >
                            <Copy size={16} className="text-gray-400" />
                          </button>
                        )}
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/5 rounded-lg hover:bg-[#00F5D4]/20 transition-colors"
                          title="Open"
                        >
                          <ExternalLink size={16} className="text-gray-400" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#50139f] to-[#00F5D4] bg-clip-text text-transparent">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/30 flex items-center gap-4 group transition-all"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <social.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-[#00F5D4] transition-colors flex-shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 border-l-4 border-l-[#00F5D4] p-6 rounded-3xl">
                <div className="flex items-start gap-3">
                  <Zap size={20} className="text-[#00F5D4] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">24-Hour Response</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We respond within 24 hours. For urgent projects, message on WhatsApp or Instagram.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Users,
  Zap,
  Shield,
  Heart,
  Copy,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const copyEmail = () => {
    navigator.clipboard.writeText('teamkreovix@gmail.com');
    setStatusType('success');
    setStatusMessage('Email address copied to clipboard!');
    setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, 3000);
  };

  // WhatsApp message function
  const sendWhatsAppMessage = () => {
    if (!formData.name || !formData.projectType || !formData.message) {
      setStatusType('error');
      setStatusMessage('Please fill in all required fields before sending WhatsApp message.');
      setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 5000);
      return;
    }

    const whatsappMessage = `Hi Kreovix Team! 👋

*New Project Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Project Type:* ${formData.projectType}

*Project Details:*
${formData.message}

Looking forward to working with you! 🚀`;

    const whatsappURL = `https://wa.me/message/YOURMESSAGELINK?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    setStatusType('success');
    setStatusMessage('WhatsApp opened! Your message is ready to send.');
    setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, 5000);
  };

  // Email function
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const subject = `New Project Inquiry: ${formData.projectType}`;
    const body = `Hello Kreovix Team,

I'm interested in working with you on a project.

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Project Details:
${formData.message}

Please get back to me at your earliest convenience.

Best regards,
${formData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:teamkreovix@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');

    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusType('success');
      setStatusMessage('Email client opened! Your message is ready to send.');
      setFormData({ name: '', email: '', projectType: '', message: '' });
      
      setTimeout(() => {
        setStatusMessage(null);
        setStatusType(null);
      }, 8000);
    }, 1500);
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
      description: 'Send us a detailed message',
      copyable: true
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Us',
      value: 'Quick Chat',
      link: 'https://wa.me/message/YOURMESSAGELINK',
      description: 'Instant messaging support'
    },
    {
      icon: Instagram,
      label: 'DM Us',
      value: '@thekreovix',
      link: 'https://www.instagram.com/thekreovix/',
      description: 'Quick response on Instagram'
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
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "Quick replies guaranteed"
    },
    {
      icon: Shield,
      title: "Free Consultation",
      description: "No-cost project discussion"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Personal project manager"
    },
    {
      icon: Heart,
      title: "100% Satisfaction",
      description: "Unlimited revisions"
    }
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-neonTeal/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-32 pb-20 relative"
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
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
              <MessageSquare size={20} className="text-neonTeal" />
              <span className="text-white font-medium">Get In Touch</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              <span className="gradient-text">Let&apos;s Create</span>
              <br />
              <span className="text-white">Something Amazing</span>
              <br />
              <span className="gradient-text">Together</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your content and elevate your brand? 
              <span className="gradient-text font-semibold"> Get in touch</span> and let&apos;s discuss 
              how we can bring your vision to life with our award-winning creative services.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism p-6 rounded-2xl border border-white/10 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-neonPurple to-neonTeal rounded-xl flex items-center justify-center mx-auto mb-3"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                >
                  <feature.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              variants={slideInLeft}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
            >
              <motion.div
                className="glassmorphism p-8 rounded-3xl border border-white/10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Fill out the form below and choose how you&apos;d like to send us your message.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full glassmorphism border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full glassmorphism border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-white font-medium mb-3">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full glassmorphism border border-white/20 rounded-xl px-4 py-4 text-white focus:border-neonTeal focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a service...</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-background text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-3">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full glassmorphism border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-neonTeal focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                    />
                  </div>

                  {/* Send Options */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                        isSubmitting
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-neonPurple to-neonTeal text-white hover:shadow-2xl'
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Opening Email...</span>
                        </>
                      ) : (
                        <>
                          <Mail size={20} />
                          <span>Send via Email</span>
                        </>
                      )}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={sendWhatsAppMessage}
                      className="flex-1 px-6 py-4 glassmorphism border border-green-500/30 rounded-xl font-medium text-lg hover:bg-green-500/20 transition-all duration-300 flex items-center justify-center gap-3 text-white"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={20} />
                      <span>Send via WhatsApp</span>
                    </motion.button>
                  </div>
                </form>

                {/* Status Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                      statusType === 'success'
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {statusType === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={contactRef}
              variants={slideInRight}
              initial="hidden"
              animate={isContactInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <motion.div
                className="glassmorphism p-8 rounded-3xl border border-white/10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl glassmorphism border border-white/5 hover:border-neonPurple/30 transition-all duration-300 group"
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-neonPurple to-neonTeal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon size={20} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                        <p className="text-neonTeal font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                      <div className="flex gap-2">
                        {info.copyable && (
                          <motion.button
                            onClick={copyEmail}
                            className="p-2 glassmorphism rounded-lg hover:bg-neonPurple/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Copy email"
                          >
                            <Copy size={16} className="text-gray-400" />
                          </motion.button>
                        )}
                        <motion.a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="p-2 glassmorphism rounded-lg hover:bg-neonTeal/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Contact us"
                        >
                          <ExternalLink size={16} className="text-gray-400" />
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                className="glassmorphism p-8 rounded-3xl border border-white/10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Our Journey</h3>
                <p className="text-gray-300 mb-6">
                  Stay updated with our latest projects and behind-the-scenes content.
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glassmorphism p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-4 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center`}
                        whileHover={{ rotate: 5 }}
                      >
                        <social.icon size={20} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:gradient-text transition-all">
                          {social.name}
                        </div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-neonTeal transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Response Promise */}
              <motion.div
                className="glassmorphism p-6 rounded-3xl border border-white/10 border-l-4 border-l-neonTeal"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-3">
                  <Zap size={20} className="text-neonTeal mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Quick Response Guarantee</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We respond to all inquiries within 24 hours. For urgent projects, 
                      DM us on Instagram or WhatsApp for immediate assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

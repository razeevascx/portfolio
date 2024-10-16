import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  // Array of social media links with their respective icons and colors
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/yourprofile',
      icon: <FaFacebook size={30} className="text-blue-600 hover:text-blue-500" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourprofile',
      icon: <FaTwitter size={30} className="text-blue-400 hover:text-blue-300" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yourprofile',
      icon: <FaLinkedin size={30} className="text-blue-700 hover:text-blue-600" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourprofile',
      icon: <FaGithub size={30} className="text-gray-700 hover:text-gray-600" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="w-full h-full px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
      
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg text-gray-300">Connect with me on social media:</p>

        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.icon.props.className}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;

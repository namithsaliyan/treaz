import React from 'react';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'Email', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png', url: 'mailto:wecare@treaz.in' },
    { name: 'WhatsApp', icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', url: 'https://wa.me/1234567890' },
    { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/733/733614.png', url: 'https://instagram.com/treaz' },
    { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', url: 'https://facebook.com/treaz' },
    { name: 'X', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/70px-X_logo_2023.svg.png', url: 'https://twitter.com/treaz' },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold mb-5 text-center text-indigo-700 font-MontBold">Connect With Us</h3>
      <div className="flex justify-center space-x-2 font-MontSemibold">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="group flex flex-col items-center transition duration-300 transform " title={link.name}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:bg-gradient-to-r from-purple-400 to-pink-400 transition duration-300">
              <img src={link.icon} alt={link.name} className="w-8 h-8" />
            </div>
            <span className="text-sm font-MontSemibold text-sm text-gray-700 group-hover:text-indigo-600">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

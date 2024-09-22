import React, { useState } from 'react';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: 'Email', icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png', url: 'mailto:wecare@treaz.in' },
  { name: 'WhatsApp', icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png', url: 'https://wa.me/+919148453611' },
  { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/733/733614.png', url: 'https://instagram.com/treaz.in' },
  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', url: 'https://www.facebook.com/share/6byfXk9tjZ4aPqnx/?mibextid=qi2Omg' },
  { name: 'X', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/70px-X_logo_2023.svg.png', url: 'https://twitter.com/treazindia' },
];

interface ContactCardProps {
  icon: string;
  title: string;
  content: string;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content, className }) => (
  <div className={`p-4 rounded-lg shadow-md ${className}`}>
    <div className="flex items-center mb-2">
      <span className="mr-2 text-xl">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm">{content}</p>
  </div>
);

const SocialLink: React.FC<SocialLink> = ({ name, icon, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110">
        <img src={icon} alt={name} className="w-6 h-6 md:w-10 md:h-10" />
      </div>
      {isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </div>
      )}
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Left column for desktop */}
          <div className="md:w-1/3 bg-indigo-600 p-8 text-white">
            <img
              src="https://www.treaz.in/static/media/logoTREAZ.17794fc22867331950ae.png"
              alt="Company Logo"
              className="w-26 h-20 object-contain mb-8 mx-auto"
            />
            <div className="space-y-4">
              <ContactCard
                icon="📍"
                title="Address"
                content="123, Example Street, Your City, Country - 123456"
                className="bg-indigo-700"
              />
              <ContactCard
                icon="🕒"
                title="Business Hours"
                content="Mon-Fri 9:00 AM - 6:00 PM"
                className="bg-indigo-700"
              />
            </div>
          </div>
          
          {/* Right column for desktop, main content for mobile */}
          <div className="md:w-2/3 p-8"> 
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Us</h3>
              <div className="flex justify-between md:justify-center md:gap-6 overflow-x-auto pb-4 md:pb-0">
                {socialLinks.map((link) => (
                  <SocialLink key={link.name} {...link} />
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:wecare@treaz.in"
                className="block w-full py-3 px-6 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/+919148453611"
                className="block w-full py-3 px-6 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
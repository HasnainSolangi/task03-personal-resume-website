// src/app/components/Sidebar/Contact.tsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMedium, FaPhone, FaMapPin } from "react-icons/fa";

const Contact: React.FC = () => {
  const contacts = [
    { icon: <FaPhone size={18} />, info: "03000161914" },
    { icon: <FaMapPin size={18} />, info: "S.I.T.E Karachi - 75800" },
    { icon: <FaEnvelope size={18} />, info: "hasnainzahoor1996@gmail.com" },
    { icon: <FaGithub size={18} />, info: "github.com/HasnainSolangi" },
    { icon: <FaLinkedin size={18} />, info: "linkedin.com/in/hasnainahmed90s" },
    { icon: <FaMedium size={18} />, info: "medium.com/@HasnainSolangi" },
  ];

  return (
    <div className="space-y-4">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-4">
          {contact.icon}
          <span className="text-sm">{contact.info}</span>
        </div>
      ))}
    </div>
  );
};

export default Contact;

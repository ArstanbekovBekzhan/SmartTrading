import React from 'react';
import CStyle from './Contact.module.css';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { IoLogoInstagram } from 'react-icons/io';

const contactData = [
  {
    icon: <BsTelephoneFill />,
    title: 'Телефон',
    link: 'tel:+996708445175',
  },
  {
    icon: <FaTelegram />,
    title: 'Telegram',
    link: 'https://t.me/elnurarstanbekova',
  },
  {
    icon: <SiWhatsapp />,
    title: 'WhatsApp',
    link: 'https://api.whatsapp.com/send/?phone=996708445175&text&type=phone_number&app_absent=0',
  },
  {
    icon: <IoLogoInstagram />,
    title: 'Instagram',
    link: 'https://www.instagram.com/elnura_pro_trading/',
  },
];

const ContactSection = () => {
  return (
    <div className={CStyle.Contacts} name="contactSection">
      <h1 className='textC'>Контакты</h1>
      <div className={CStyle.rounds}>
        {contactData.map((contact, index) => (
          <a target="_blank" href={contact.link} className={CStyle.roundabout} key={index}>
            <div className={CStyle.icon}>{contact.icon}</div>
            <div className="textC">
              <h3>{contact.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
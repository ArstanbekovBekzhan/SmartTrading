import React, { useEffect, useState } from 'react';
import LCS from "./LessenCards.module.css";

const data = [
  {
    id: 1,
    title: "Онлайн + оффлайн занятия",
    content: [
    "8 модулей",
     "14 видео уроков",
     "9 созвонов, обратная связь по домашним заданиям ",
     "Торговля в режиме реального времени",
     "Живые встречи один раз в неделю"
    ]
  },
  {
    id: 2,
    title: "Только онлайн",
    content: [
      "8 модулей",
      "14 видео уроков",
      "9 созвонов, обратная связь по домашним заданиям ",
      "Торговля в режиме реального времени",
      
    ]
  },
];

const LessenCards = () => {
  const [username, setUsername] = useState('');
  const [clickedButton, setClickedButton] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) setUsername(savedUsername);
  }, []);

  const handleButtonClick = (buttonType) => {
    setClickedButton(buttonType);
    setWhatsappMessage(`Здравствуйте, меня зовут ${username}. Я выбрал ${buttonType} курс.`);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = clickedButton === 'золотой' ? '996708445175' : 'серебряный';
    const messageText = whatsappMessage;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageText)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className={LCS.Themes} name="Themes">
      <h1>Типы занятий</h1>
      <div className={LCS.ThemesC}>
        {data.map((item, index) => (
          <ul className={LCS.blocks} key={item.number}>
              <h3>{item.title}</h3>
              <ul className={LCS.ul}>
                {item.content.map((contentItem) => (
                  <li key={contentItem}>{contentItem}</li>
                ))}
              </ul>
            <button onClick={() => handleButtonClick(index === 0 ? 'золотой' : 'серебряный')} disabled={!username}>
              Записаться
            </button>
            {!username && <p>*Имя обязательно</p>}
          </ul>
        ))}
        {clickedButton && (
          <a href="#" onClick={handleWhatsAppClick}>
            <button className={LCS.WhatsApp}>Отправить сообщение в WhatsApp</button>
          </a>
        )}
      </div>
    </section>
  );
};

export default LessenCards;
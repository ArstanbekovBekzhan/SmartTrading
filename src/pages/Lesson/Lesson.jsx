import React, { useState, useEffect, useRef } from 'react';
import LessS from './Lesson.module.css';
import LessenCards from '../../component/LessenS/LessenCards/LessenCards';

const Lesson = () => {
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);
  const savedUsername = localStorage.getItem('username');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSaveUsername = () => {
    localStorage.setItem('username', username);
    inputRef.current.value = '';
    window.location.reload()
  };

  return (
    <div className={LessS.Lesson} name="Lesson">
      <div className={LessS.bg}>
      {!savedUsername && (
        <div>
      <h1>Можете написать свой имя</h1>
          <input type="text" placeholder='Имя' value={username} onChange={handleInputChange} ref={inputRef} className={LessS.Input} />
          <button onClick={handleSaveUsername} className={LessS.Button}>Save Username</button>
        </div>
      )}
      <LessenCards/>
      </div>
    </div>
  );
};

export default Lesson;
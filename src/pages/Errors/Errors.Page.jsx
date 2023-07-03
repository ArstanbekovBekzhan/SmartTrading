import React from 'react';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles['error-page']}>
      <h1 className={styles['error-page__title']}>Oops!</h1>
      <p className={styles['error-page__message']}>Что-то пошло не так.</p>
      <a href="/" className={styles['error-page__link']}>Go back</a>
    </div>
  );
};

export default ErrorPage;

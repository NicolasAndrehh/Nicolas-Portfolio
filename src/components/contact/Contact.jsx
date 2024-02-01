import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './dark-theme.scss';
import './light-theme.scss';

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('xayrewlp');

  if (state.succeeded) {
    return (
      <section id="contact" className={isDarkMode ? 'dark-theme-contact-section' : 'light-theme-contact-section'}>
        <h2 className="title">{t('contact.title')}</h2>
        <p className="success-message">{t('contact.form.success')}</p>
      </section>
    );
  }

  return (
    <section id="contact" className={isDarkMode ? 'dark-theme-contact-section' : 'light-theme-contact-section'}>
      <h2 className="title">{t('contact.title')}</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t('contact.form.name')}</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input type="email" name="email" id="email" required />
          <ValidationError prefix={t('contact.form.email')} field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea name="message" id="message" cols="30" rows="10" required />
          <ValidationError prefix={t('contact.form.message')} field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting} className="submit-btn">
          {t('contact.form.submit')}
        </button>
      </form>
    </section>
  );
};

export default Contact;

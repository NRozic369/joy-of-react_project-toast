import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState();
  const [variant, setVariant] = React.useState('notice');

  const { toasts } = React.useContext(ToastContext);
  const { handleAddToast } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddToast(message, variant);
    setMessage('');
    setVariant('notice');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {toasts.length > 0 && <ToastShelf toasts={toasts} />}
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((type, index) => (
                <label htmlFor={index} key={index}>
                  <input
                    key={index}
                    id={index}
                    type="radio"
                    name="variant"
                    value={type}
                    checked={variant === type}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;

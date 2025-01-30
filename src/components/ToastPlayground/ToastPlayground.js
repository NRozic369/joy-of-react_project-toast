import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState();
  const [variant, setVariant] = React.useState();
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  function handleToastClose() {
    setIsToastOpen(false);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsToastOpen(true);
      }}
    >
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {isToastOpen && (
          <Toast
            message={message}
            variant={variant}
            onClose={handleToastClose}
          />
        )}
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

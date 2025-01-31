import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, closeToastById }) {
  if (toasts.length === 0) return null;

  function onToastClose(id) {
    closeToastById(id);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            onClose={() => onToastClose(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

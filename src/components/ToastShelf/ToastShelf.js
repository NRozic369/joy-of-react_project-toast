import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            message={toast.message}
            variant={toast.variant}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

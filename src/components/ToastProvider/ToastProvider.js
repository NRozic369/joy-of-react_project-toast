import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleAddToast(message, variant) {
    const newToast = {
      id: Math.random(),
      message,
      variant,
    };
    const nextToast = [...toasts, newToast];
    setToasts(nextToast);
  }

  function handleCloseById(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        handleAddToast,
        handleCloseById,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

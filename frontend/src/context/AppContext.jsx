import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [quickLookProduct, setQuickLookProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openQuickLook = (product) => {
    setQuickLookProduct(product);
  };

  const closeQuickLook = () => {
    setQuickLookProduct(null);
  };

  const showToast = (message, duration = 2500) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  return (
    <AppContext.Provider
      value={{
        quickLookProduct,
        openQuickLook,
        closeQuickLook,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);


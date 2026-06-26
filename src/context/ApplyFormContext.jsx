import { createContext, useContext, useState, useCallback } from 'react';

const ApplyFormContext = createContext(null);

export function ApplyFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openApplyForm = useCallback(() => setIsOpen(true), []);
  const closeApplyForm = useCallback(() => setIsOpen(false), []);

  return (
    <ApplyFormContext.Provider value={{ isOpen, openApplyForm, closeApplyForm }}>
      {children}
    </ApplyFormContext.Provider>
  );
}

export function useApplyForm() {
  const ctx = useContext(ApplyFormContext);
  if (!ctx) {
    throw new Error('useApplyForm must be used within ApplyFormProvider');
  }
  return ctx;
}

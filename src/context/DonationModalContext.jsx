import { createContext, useCallback, useContext, useMemo, useState } from "react";

const DonationModalContext = createContext(null);

export function DonationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDonationModal = useCallback(() => setIsOpen(true), []);
  const closeDonationModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openDonationModal, closeDonationModal }),
    [isOpen, openDonationModal, closeDonationModal]
  );

  return (
    <DonationModalContext.Provider value={value}>
      {children}
    </DonationModalContext.Provider>
  );
}

export function useDonationModal() {
  const context = useContext(DonationModalContext);
  if (!context) {
    throw new Error("useDonationModal must be used within a DonationModalProvider");
  }
  return context;
}

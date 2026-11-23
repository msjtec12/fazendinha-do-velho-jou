"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ExperienceType } from "@/lib/whatsapp";

interface BookingContextValue {
  isOpen: boolean;
  defaultExperience: ExperienceType;
  openBookingModal: (experience?: ExperienceType) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultExperience, setDefaultExperience] = useState<ExperienceType>(
    "Visita em família (Day Use)"
  );

  const openBookingModal = useCallback((experience?: ExperienceType) => {
    if (experience) {
      setDefaultExperience(experience);
    }
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        defaultExperience,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking deve ser utilizado dentro de um BookingProvider");
  }
  return context;
}

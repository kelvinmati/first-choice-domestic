import React, { createContext, useContext, useMemo, useState } from 'react'

type BookingModalContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined)

export const BookingModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen]
  )

  return (
    <BookingModalContext.Provider value={value}>
      {children}
    </BookingModalContext.Provider>
  )
}

export const useBookingModal = () => {
  const context = useContext(BookingModalContext)
  if (!context) {
    throw new Error('useBookingModal must be used within BookingModalProvider')
  }
  return context
}

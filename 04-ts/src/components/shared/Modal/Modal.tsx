import type React from "react"
import type { ReactNode } from "react"

type ModalProps = {
  children?: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}
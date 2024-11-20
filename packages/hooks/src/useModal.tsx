import type { ModalProps } from 'antd'
import { Modal } from 'antd'
import React, { useState } from 'react'

interface UseModalReturnType {
  showModal: (props: ModalProps) => void
  ModalComponent: (props: ModalProps) => JSX.Element
  setIsModalOpen: (isOpen: boolean) => void
  isModalOpen: boolean
}

export function useModal(): UseModalReturnType {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProps, setModalProps] = useState<ModalProps>({})

  const showModal = (props: ModalProps) => {
    setModalProps(props)
    setIsModalOpen(true)
  }

  const ModalComponent = ({ children, ...props }: ModalProps) => {
    return (
      <Modal
        {...modalProps}
        {...props}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
      >
        {children}
      </Modal>
    )
  }

  return {
    showModal,
    ModalComponent,
    setIsModalOpen,
    isModalOpen,
  }
}

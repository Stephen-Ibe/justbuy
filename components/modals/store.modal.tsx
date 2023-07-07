"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and catgories"
      isOpen={isOpen}
      onClose={onClose}
    >
      New Store Form
    </Modal>
  );
};

export default StoreModal;

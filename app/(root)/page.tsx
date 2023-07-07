"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal isOpen title="Test" description="Test Desc" onClose={() => {}}>
        Hello World
      </Modal>
    </div>
  );
};

export default SetupPage;

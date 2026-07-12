"use client";

import { TrashBin } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal = ({
  isOpen,
  title = "Delete Event",
  message = "Are you sure you want to delete this event? This action cannot be undone.",
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) => {
  return (
    <Modal>
      <Modal.Backdrop
        isOpen={isOpen}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
      >
        <Modal.Container size="md">
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-100 text-red-600">
                <TrashBin className="size-5" />
              </Modal.Icon>

              <Modal.Heading>{title}</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-base-content/70">{message}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onPress={onClose}>
                Cancel
              </Button>

              <Button variant="danger" onPress={onConfirm}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteConfirmationModal;

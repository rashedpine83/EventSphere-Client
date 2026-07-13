"use client";

import { useEffect, useState } from "react";
import { Modal, Button, Input, TextArea } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Label } from "recharts";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    attendeeName: string;
    phone: string;
    address: string;
  }) => void;
  loading?: boolean;
}

const RegistrationModal = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
}: RegistrationModalProps) => {
  const { data: session } = authClient.useSession();

  const [attendeeName, setAttendeeName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (session?.user) {
      setAttendeeName(session.user.name ?? "");
    }
  }, [session]);

  const handleSubmit = () => {
    if (!attendeeName.trim()) return;
    if (!phone.trim()) return;

    onSubmit({
      attendeeName,
      phone,
      address,
    });
  };

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
            <Modal.Header>
              <Modal.Heading>Register For Event</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="space-y-5">
              <Label>Full Name</Label>
              <Input
                type="text"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                placeholder="Full Name"
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-emerald-500
                "
              />
              <Label>Email</Label>
              <Input
                id="email"
                value={session?.user?.email ?? ""}
                readOnly
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-emerald-500
                "
              />

              <Label>Phone Number</Label>
              <Input
                id="phone"
                placeholder="01XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-emerald-500
                "
              />
              <Label>Address</Label>
              <textarea
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    focus:border-emerald-500
                "
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onPress={onClose}>
                Cancel
              </Button>
              <Button onPress={handleSubmit} isDisabled={loading}>
                {loading ? "Registering..." : "Continue"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RegistrationModal;

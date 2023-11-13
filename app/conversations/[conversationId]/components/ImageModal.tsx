"use client";

import { FC } from "react";

import Image from "next/image";

import Modal from "@/app/components/Modal";

interface IImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal: FC<IImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className=" w-80 h-80">
        <Image alt="image" className=" object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;

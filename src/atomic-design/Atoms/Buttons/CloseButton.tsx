import {XMarkIcon} from "@heroicons/react/24/outline";
import React from "react";

type CloseButtonProps = {
  onClose: () => void;
};

const CloseButton = ({onClose}: CloseButtonProps) => {
  return (
    <button onClick={onClose}>
      <XMarkIcon className="w-12 h-12 text-black" />
    </button>
  );
};

export default CloseButton;

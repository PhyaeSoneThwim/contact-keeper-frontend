import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import Icon from "../form/icon";

const SideDrawer = ({ open, onClose, children, maxWidth }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [open]);
  return (
    <div className={`absolute inset-0 overflow-hidden`}>
      <div
        className={`fixed z-30 ease-in-out inset-0 bg-black duration-200 ${
          open ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`z-40 overflow-y-auto absolute ease-in-out inset-y-0 right-0 transition transform duration-300 w-full max-w-${maxWidth} ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* <div className="bg-glass absolute inset-0"></div> */}
        <div className="min-h-screen bg-white relative flex flex-col pt-3 pb-6 overflow-y-auto">
          <header className="px-4 z-20 sm:px-6">
            <div className="flex items-center justify-end">
              <Icon icon={<FiX size={16} />} onClick={onClose} />
            </div>
          </header>
          <div className="relative">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;

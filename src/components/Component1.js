import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./component1.css";
import Modal1 from "./Modal1";
import { IoMdSettings } from "react-icons/io";

const Component1 = () => {
  const [toastDuration, setToastDuration] = useState(7000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showToast = () => {
    toast("Toaster Developed By AJINKYA SIR", {
      autoClose: toastDuration,
      hideProgressBar: false,
      pauseOnHover: true,
      newestOnTop: true,
    });
  };

  const handleSettings = () => {
    setIsModalOpen(true);
  };

  const updateToastDuration = (duration) => {
    setToastDuration(duration);
    setIsModalOpen(false);
  };

  return (
    <div className="component1">
      <button onClick={showToast} className="setting-button">
        Show Toast
      </button>
      <button className="setting-button" onClick={handleSettings}>
        <IoMdSettings />
      </button>

      <div className="toast-container">
        <ToastContainer
          className="custom-toast"
          limit={3}
          position="bottom-right"
          toastStyle={{ backgroundColor: "#b9e58b", color: "#2e5109" }}
        />
      </div>

      {isModalOpen && (
        <Modal1
          onClose={() => setIsModalOpen(false)}
          onSave={updateToastDuration}
        />
      )}
    </div>
  );
};

export default Component1;

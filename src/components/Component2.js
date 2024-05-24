import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoMdSettings } from "react-icons/io";
const Component2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [toasts, setToasts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastDuration, setToastDuration] = useState(5000);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (toasts.length < 3) {
      const newToast = {
        id: Date.now(),
        content: inputValue,
      };
      setToasts([...toasts, newToast]);
      toast(inputValue, {
        autoClose: toastDuration,
        onClose: () => removeToast(newToast.id),
        closeButton: true,
        className: "toast-gradient",
      });
      setInputValue(""); 
    } else {
      toast.warn("Maximum 3 toasts allowed", {
        position: "top-center",
      });
    }
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDurationChange = (e) => {
    setToastDuration(Number(e.target.value) * 1000); // convert to milliseconds
  };

  return (
    <div className="component2">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
          className="input-box"
        />
      </div>
      <button onClick={handleOpenModal} className="setting-button">
        <IoMdSettings />
      </button>
      <button onClick={handleButtonClick} className="display-button">
        Display Toast
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={toastDuration}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        toastStyle={{ backgroundColor: "#b9e58b", color: "white" }}
      />

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Set Toast Duration</h2>
            <input
              type="number"
              min="1"
              onChange={handleDurationChange}
              placeholder="Duration in seconds"
              className="duration-input"
            />
            <button onClick={handleCloseModal} className="close-button">
              Set Duration
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Component2;

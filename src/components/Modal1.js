import React, { useState } from "react";
import "./Modal1.css"; // Import the custom CSS for the modal

const Modal1 = ({ onClose, onSave }) => {
  const [duration, setDuration] = useState("");

  const handleSave = () => {
    const durationInMs = parseInt(duration) * 1000;
    if (!isNaN(durationInMs) && durationInMs > 0) {
      onSave(durationInMs);
    }
  };

  return (
    <div className="modal-overlay1">
      <div className="modal1">
        <h2>Set Toast Duration</h2>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration in seconds"
        />
        <div className="modal-buttons1">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal1;

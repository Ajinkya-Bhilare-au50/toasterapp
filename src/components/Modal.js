import React, { useState } from "react";

const Modal = ({ onClose, onSave }) => {
  const [duration, setDuration] = useState(5); // Default duration in seconds

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSaveClick = () => {
    const durationMs = duration * 1000; // Convert seconds to milliseconds
    onSave(durationMs);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Set Toast Duration</h2>
        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
          min="1"
          placeholder="Enter duration in seconds"
        />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

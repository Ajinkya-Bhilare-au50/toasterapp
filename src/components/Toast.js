import React, { useEffect, useState } from "react";
import "./Toast.css"; // Import custom CSS for Toast

const Toast = ({ message, onClose, duration }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0));
    }, 100);

    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div className="toast">
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={onClose}>
        &times;
      </button>
      <div className="toast-progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};


export default Toast;

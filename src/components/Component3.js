import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./Component3.css";

const Component3 = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [timerInput, setTimerInput] = useState("");
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    if (countdown === 0 && loading) {
      fetchCountries();
    } else if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, loading]);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        "https://api.knowmee.co/api/v1/master/get-country-list"
      );
      setCountries(response.data.responseData);
      setLoading(false);
      setIsCountdownActive(false);
    } catch (error) {
      setError("Error fetching Country List. Please retry.");
      setLoading(false);
      setIsCountdownActive(false);
      setTimeout(() => {
        setError(null); //
      }, 3000);
    }
  };

  const handleStartCountdown = () => {
    setLoading(true);
    setCountdown(parseInt(timerInput, 10));
    setTimerInput("");
    setIsCountdownActive(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedCountries = countries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (
      value === "" ||
      (Number(value) >= 0 && Number.isInteger(Number(value)))
    ) {
      setTimerInput(value);
    }
  };

  return (
    <div className="main-container">
      <div className="component-container">
        {!loading && countries.length === 0 && (
          <>
            <p>Enter Count Down Time</p>
            <div className="universal">
              <input
                className="input-box"
                type="number"
                value={timerInput}
                onChange={handleInputChange}
                placeholder="Enter seconds"
              />
              <button
                className="display-button"
                onClick={handleStartCountdown}
                disabled={isCountdownActive}
              >
                Start Timer
              </button>
            </div>
          </>
        )}
        {error && <p>{error}</p>}
        {loading && (
          <div className="loading-spinner">
            <ClipLoader color="#842029" size={25} />
            {countdown > 0
              ? `Fetching data in ${countdown} seconds...`
              : "Loading Data. Please Wait..."}
          </div>
        )}
        {!loading && countries.length > 0 && (
          <ul>
            {paginatedCountries.map((country) => (
              <li key={country.country_id}>{country.country_name}</li>
            ))}
          </ul>
        )}
        <div className="pagination">
          {Array.from(
            { length: Math.ceil(countries.length / itemsPerPage) },
            (_, index) => (
              <button
                className="display-button"
                key={index}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
     
    </div>
  );
};

export default Component3;

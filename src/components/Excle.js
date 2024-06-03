import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Excel.css";

const Excel = () => {
  const [excel, setExcel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsletter-backend-ten.vercel.app/email`
        );
        const allemails = response.data.message.map((obj) => obj.email);
        setExcel(allemails);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleDownloadExcel = () => {
    // Show modal to enter password
    setShowModal(true);
  };

  const verifyPasswordAndDownload = () => {
    if (password === "peerplay@excel") {
      // Password correct, proceed to download Excel
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(
        excel.map((email) => ({ email }))
      );
      XLSX.utils.book_append_sheet(workbook, worksheet, "Emails");
      XLSX.writeFile(workbook, "emails.xlsx");
      // Close modal
      setShowModal(false);
    } else {
      alert("Incorrect password! Please try again.");
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <button className="export-button" onClick={handleDownloadExcel}>
        Export as Excel
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Enter Password</h2>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
              />
              {/* Toggle password visibility */}
              {showPassword ? (
                <AiFillEyeInvisible
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <button
              className="verify-button"
              onClick={verifyPasswordAndDownload}
            >
              Verify and Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Excel;

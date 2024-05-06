import React, { useRef } from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import "../styles/style.css";

const Signature = ({ labelText }) => {
  const signatureRef = useRef();

  const handleClear = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    signatureRef.current.clear();
  };

  return (
    <div className="signature-field">
      <label className="form-track__label">{labelText}</label>
      <div className="signature-canvas-container">
        <ReactSignatureCanvas
          ref={signatureRef}
          penColor="black"
          canvasProps={{ width: 250, height: 150, className: "applicant_canvas" }}
        />
        <button onClick={handleClear} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Signature;

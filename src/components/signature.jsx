import "../styles/style.css";
import ReactSignatureCanvas from "react-signature-canvas";

function Signature(props) {
  const { labelText } = props;
  return (
    <>
      <label className="form-track__label">{labelText}</label>

      <ReactSignatureCanvas
        penColor="green"
        canvasProps={{ width: 250, height: 150, className: "applicant_canvas" }}
      />
    </>
  );
}

export default Signature;

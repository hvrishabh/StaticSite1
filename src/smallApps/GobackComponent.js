import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerContext } from "../contexts/registerContext";

function GobackComponent(props) {
  const { children } = props;
  const { showApp, setShowApp } = useContext(registerContext);
  const navigate = useNavigate();

  function goback() {
    navigate("/demo");
    setShowApp(false);
  }

  return (
    <div>
      <button onClick={goback}>{children}</button>
    </div>
  );
}

export default GobackComponent;

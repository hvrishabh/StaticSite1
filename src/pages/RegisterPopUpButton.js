import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from "./Register";
import styles from "./RegisterPopUpButton.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { registerContext } from "../contexts/registerContext";

const { registerClass } = styles;

function RegisterPopUpButton() {
  const test = useContext(registerContext);
  console.log(test);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const { name, setName, password, setPassword } = useContext(registerContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    navigate("/");
    setName("");
    setPassword("");
    handleClose();
  }

  return (
    <>
      <Button className={registerClass} variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterPopUpButton;

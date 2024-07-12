import Thrifty from "../../assets/icons/thrifty-high-resolution-logo-transparent.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Thrifty} width={"150px"} />
          </a>
          <Button variant="" onClick={handleShow}>
            <span className="material-symbols-outlined">menu</span>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Categories</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Links */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useState } from "react";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";
import {Modal, Button} from 'react-bootstrap';

const headerStyle = {
  width: '100%',
  padding: '15px 20px',
  marginBottom: '30px',
  background: 'linear-gradient(to right, #6c5ce7, #a29bfe)',
  borderRadius: '0 0 15px 15px',
  boxShadow: '0 5px 20px rgba(188, 92, 231, 0.5)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: '0',
  zIndex: '100'
}

const App = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="app-container">
      <div className="app-background"></div>
      {/* <div className="nav-bar"> */}

        <header style={headerStyle}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#6c5ce7',
              fontWeight: 'bold',
              fontSize: '20px',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.5)'
            }}>
              R
            </div>
            <span>React App {new Date().getFullYear()}</span>
          </div>

          <button
            className={`toggle-btn ${isLogined ? "logout" : "login"}`}
            onClick={() => setIsLogined(!isLogined)}
          style={{
            background: isLogined ? 
            'linear-gradient(to right, #ff6b6b, #ff8e8e)' :
            'linear-gradient(to right, #00b894, #55efc4)',
            padding: '10px 25px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'
          }}>
            {isLogined ? "Logout" : "Login"}
          </button>
        </header>

      {/* </div> */}
      <div className="app-content">
        {isLogined ? <UserComponent /> : <GuestComponent />}
      </div>

      {/* Bootstrap */}
      {/* <div className="container mt-5">
          <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exapleModal"
          >
            بازکردن مودال
          </button>

          <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLable"
          aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLable">
                    عنوان مودال
                  </h5>
                  <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-lable="بستن"
                  ></button>
                </div>
                <div className="modal-body">سلام این یک مودال است.😎</div>
                <div className="modal-footer">
                  <button
                   type="button"
                   className="btn btn-secondary"
                   data-bs-dismiss="modal"
                   >
                    بستن
                   </button>
                </div>
              </div>
            </div>
          </div>
      </div> */}

      {/* Component Bootstrap */}
      
      <Button variant="primary" onClick={handleShow}>
        بازکردن مودال
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>عنوان مودال</Modal.Title>
        </Modal.Header>
        <Modal.Body>سلام! این یک مودال با React-Bootstrap است😉</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default App;

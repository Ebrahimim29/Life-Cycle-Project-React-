import { useState } from "react";
import UserComponent from "./UserComponent";
import GuestComponent from "./GuestComponent";

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
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './views/Login';
import Projects from './views/Project';
import { Container } from 'reactstrap';

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const onLoginSuccess = (token) => {
    setShowLoginPage(false);
    localStorage.setItem("user", JSON.stringify({ token, isLoggedIn: true }));
  };
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user?.isLoggedIn) {
      setShowLoginPage(false);
    }
  }, []);

  return (
    <Container
        style={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {showLoginPage ? (
          <div>
            <Login {...{ onLoginSuccess }} />
          </div>
        ) : (
          <>
            <Projects />
          </>
        )}
      </Container>

  );
}

export default App;

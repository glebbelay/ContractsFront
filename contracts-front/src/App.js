import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css"

import ForumPage from "./pages/ForumPage";
import PostPage  from "./pages/PostPage";



const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {

      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return element;
};

function App() {
  
    return (
      <div className="name">
      
      <Router>
        <Routes>
          <Route path="/" element={<ForumPage />} /> 
          <Route path="/post" element={<PostPage/>} />

        </Routes>

        
      </Router>
      </div>
    );
}

export default App;

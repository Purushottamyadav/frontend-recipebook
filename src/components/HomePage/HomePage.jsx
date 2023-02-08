import React, { useEffect } from "react";
import "./home.css"
import { useNavigate } from "react-router-dom";
import RecipeBook from "../reciepebook";

function HomePage() {
  const navigate = useNavigate();
  const handlelogout = () => {
    sessionStorage.removeItem("authentication");
    navigate("/");
  };

  useEffect(() => {
    fetch("https://recipebooks.onrender.com/home", {
      method: "get",
      headers: {
        authentication: sessionStorage.getItem("authentication"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
      });
  }, []);


  return (
    <>  
     <div className="main-container">
      <div onClick={handlelogout}
        style={{ cursor: "pointer" }}
        className="logout">
        <h3 className="user-name" style={{color:"black"}}>WELCOME TO RECIPE WEB APPLICATION</h3>
        <h3>
          Logout
        </h3>
      </div>
      <div>
        <RecipeBook />
      </div>

    </div>



    </>
  );
}
export default HomePage;

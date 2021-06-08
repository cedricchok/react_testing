import React from 'react';
import "./home.css";

function Home(props) {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "calc(100vh - 150px)"
    }}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;

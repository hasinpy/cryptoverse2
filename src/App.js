import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout as AntLayout, Typography, Space } from "antd"; // Corrigé
import { NavBar } from "./components"; // Corrigé

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;

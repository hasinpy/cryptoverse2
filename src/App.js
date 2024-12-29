/*
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout as AntLayout, Typography, Space } from "antd"; // Corrigé

import {
  NavBar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components"; // Corrigé
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Routes exact path="/">
                <Homepage />
              </Routes>
              <Routes exact path="/exchanges">
                <Exchanges />
              </Routes>
              <Routes exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Routes>
              <Routes exact path="/crypto/:coinId">
                <CryptoDetails />
              </Routes>
              <Routes exact path="/news">
                <News />
              </Routes>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
*/

/*
import { Link } from "react-router-dom"; // Importation de Link pour la navigation
import { Space } from "antd"; // Importation de Space pour espacer les éléments
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd"; // Correction importation
import {
  NavBar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/">
                <Homepage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse2 <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
*/

import { Link } from "react-router-dom"; // Ajouté
import React from "react";
import { Routes, Route } from "react-router-dom"; // Corrigé
import { Layout, Typography, Space } from "antd"; // Importation correcte
import {
  NavBar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />{" "}
              {/* Utilisation de "element" */}
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse2 <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

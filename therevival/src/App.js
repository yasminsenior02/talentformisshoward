
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Playlist from "./components/Playlist";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import { AuthContextProvider, useAuthContext } from "../AuthContext/auth";
import Aboutme from "./components/Aboutme";
import Platform from "./components/Platform";
import Initiatives from "./components/Platform"
import Surprise from "./components/Surprise";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthContextProvider>
      <>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/Surprise" element={<Surprise />} />
            {/* <Route path="/nutritform" element={<nutritform />} /> */}
          </Routes>
        </BrowserRouter>

        {/* <Container
        id="container"
        maxWidth={false}
        sx={{ backgroundColor: "#2c4147", flexGrow: 1 }}
      >
        {" "}
        my Container
      </Container> */}
      </>
    </AuthContextProvider>
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Button variant="contained">Contained</Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */
  );
}

export default App;

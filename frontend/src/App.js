import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
      <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;

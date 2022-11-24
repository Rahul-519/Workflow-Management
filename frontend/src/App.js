import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
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

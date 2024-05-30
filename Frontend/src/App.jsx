import React, { useState, useEffect } from "react";
import Header from "./header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./body";

export const Context = React.createContext();

const App = () => {
  const [cdat, setcdat] = useState([]);
  const [regi, setregi] = useState(false);
  const [r, setr] = useState(false);
  const [reg, setreg] = useState(false);
  const [currmode, setmode] = useState(false);

  const togglefunc = () => {
    setmode(!currmode);
  };

  const [lgnmodal, setlgnmodal] = useState(false);
  const lgntoggle = () => {
    setlgnmodal(!lgnmodal);
  };

  const [log, setlog] = useState(false);
  const logfn = () => {
    setlog(!log);
  };

  const [mail, setmail] = useState("");

  const values = {
    mail,
    setmail,
    reg,
    setreg,
    r,
    setr,
    log,
    setlog,
    currmode,
    setmode,
    lgnmodal,
    setlgnmodal,
    lgntoggle,
    logfn,
    togglefunc,
    regi,
    setregi,
  };

  return (
    <div>
      <Context.Provider value={values}>
        <Header />
        <Body />
      </Context.Provider>
    </div>
  );
};

export default App;

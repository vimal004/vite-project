import React from "react";
import Header from "./header";
import Body from "./body";
import { useState } from "react";
export const Context = React.createContext();
const App = () => {
  const [r, setr] = useState(false);
  const [reg, setreg] = useState(false);
  const [currmode, setmode] = useState(false);
  const togglefunc = () => {
    if (currmode ? setmode(false) : setmode(true));
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
  };

  return (
    <div className="">
      <Context.Provider value={values}>
        <Header
          currmode={currmode}
          togglefunc={togglefunc}
          logtoggle={lgntoggle}
          log={log}
          logfn={logfn}
        />
        <Body
          currmode={currmode}
          lgnmode={lgnmodal}
          lgtgl={lgntoggle}
          logfn={logfn}
          log={log}
        />
      </Context.Provider>
    </div>
  );
};

export default App;


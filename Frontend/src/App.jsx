import React, { useState, useEffect } from "react";
import Header from "./header";
import Body from "./body";

export const Context = React.createContext();

const App = () => {
  const [cdat, setcdat] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(
      "https://www.meesho.com/api/v1/navigation-tree"
    );
    const jsondata = await response.json();
    console.log(jsondata);
    console.log(jsondata?.payload?.level_1[1]);
    setcdat(jsondata?.payload?.level_1[1]?.level_2);
  };

  useEffect(() => {
    console.log(cdat);
  }, [cdat]);

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
  };

  return (
    <div>
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

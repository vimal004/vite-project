import React from "react";
import Header from "./header";
import Body from "./body";
import { useState } from "react";

const App = () => {
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

  return (
    <div className="">
      <Header
        currmode={currmode}
        togglefunc={togglefunc}
        logtoggle={lgntoggle}
        log={log}
      />
      <Body
        currmode={currmode}
        lgnmode={lgnmodal}
        lgtgl={lgntoggle}
        logfn={logfn}
        log={log}
      />
    </div>
  );
};

export default App;

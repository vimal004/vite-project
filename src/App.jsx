import React from "react";
import Header from "./header";
import Body from "./body";
import { useState } from "react";

const App = () => {
  const [currmode, setmode] = useState(false);
  const togglefunc = () => {
    if (currmode ? setmode(false) : setmode(true));
    console.log(currmode);
  };

  const [lgnmodal, setlgnmodal] = useState(false);
  const lgntoggle = () => {
    setlgnmodal(!lgnmodal);
    console.log(lgnmodal);
  };

  return (
    <div className="">
      <Header
        currmode={currmode}
        togglefunc={togglefunc}
        logtoggle={lgntoggle}
      />
      <Body currmode={currmode} lgnmode={lgnmodal} />
    </div>
  );
};

export default App;

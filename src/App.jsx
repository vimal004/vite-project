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
  return (
    <div className="">
      <Header currmode={currmode} togglefunc={togglefunc}/>
      <Body currmode={currmode}/>
    </div>
  );
};

export default App;

import React from "react";
import Screen from "./Screen";
import Lang from "./context";
import translations from "./translations";

const App = () => {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
};

export default App;

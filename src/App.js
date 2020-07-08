import React, { useEffect } from "react";
import data from "./full.json";
import logo from "./logo.svg";
// import "./App.css";
import Tree from "./components/tree/tree";
//import { rollup } from "rollup/dist/es/rollup.browser";

// modules.forEach(module => {
// 	moduleById[module.name] = module;
// });

// async function test() {
//   const { output } = await (await rollup(inputOptions)).generate({});
//   console.log(output)
// }

function App() {
  useEffect(() => {
    console.log("mounted");
    // console.log(rollup);

    // test();
  }, []);
  return (
    <div className="App">
      <Tree nodes={data} />
    </div>
  );
}

export default App;

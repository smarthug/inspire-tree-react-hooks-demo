import React, { useEffect } from "react";
import data from "./full.json";
import logo from "./logo.svg";
// import "./App.css";
//import Tree from "./components/tree/tree";
// import Tree from "./components/treeBeard";
//import { rollup } from "rollup/dist/es/rollup.browser";
import Test from './components/treedomtest/index'

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
     <Test data={data} />
    </div>
  );
}

//<Tree nodes={data} />

export default App;

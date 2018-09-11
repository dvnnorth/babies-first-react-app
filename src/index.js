import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

const HelloReact = () => <p>Hello World!</p>;
const App = () => <HelloReact />;

ReactDOM.render(<App />, document.getElementById("root"));

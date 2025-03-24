import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Projects/Todo";
import Counter from "./Projects/Counter";

function App() {
  return (
    <>
      <Todo />
      <Counter />
    </>
  );
}

export default App;

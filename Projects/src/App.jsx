import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Projects/Todo";
import Counter from "./Projects/Counter";
import Fetch from "./Projects/Fetch";
import Form from "./Projects/Form";

function App() {
  return (
    <>
      <Todo />
      <Counter />
      <Fetch />
      <Form />
    </>
  );
}

export default App;

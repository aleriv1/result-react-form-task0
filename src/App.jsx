import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  return (
    <>
      <h1>Alena</h1>
      <form>
        <input
          type="email"
          name="email"
          id=""
          value={email}
          placeholder="email"
        />
        <input
          type="password"
          name=""
          id=""
          value={password}
          placeholder="password"
        />
        <input
          type="password"
          name=""
          id=""
          value={repeatPassword}
          placeholder="repeat password"
        />
      </form>
    </>
  );
}

export default App;

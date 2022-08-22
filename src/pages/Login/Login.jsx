import DeliveryCarLogo from "../../assets/DeliveryCarLogo";
import client from "../../utils/axios/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login.scss";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  async function doLogin() {
    try {
      const response = await client.post("/client/authenticate", {
        username,
        password,
      });

      console.log(response.data); // salvar no cookie
      setUsername("");
      setPassword("");
      navigate("/profile");
    } catch (e) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <div className="login-container">
      <h1>Delivery</h1>
      <DeliveryCarLogo />
      <div className="inputs">
        <input
          className="login-input"
          placeholder="login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="login-input"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
        ></input>
        <div
          className={`enter-button ${error ? "error" : ""}`}
          onClick={doLogin}
        >
          Entrar
        </div>
      </div>

      {error && <p className="error-message">Usuario ou senha invalidos!</p>}
    </div>
  );
}

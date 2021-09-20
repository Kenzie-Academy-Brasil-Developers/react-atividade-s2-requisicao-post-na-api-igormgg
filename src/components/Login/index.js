import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.css";

const Login = () => {
  return (
    <div id="container">
      <form className="mainBox">
        <div>
          <h5>Nome de usuário</h5>
          <input type="text" placeholder="Insira seu nome de usuário" />
        </div>
        <div>
          <h5>Senha</h5>
          <input type="password" placeholder="Insira sua senha" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

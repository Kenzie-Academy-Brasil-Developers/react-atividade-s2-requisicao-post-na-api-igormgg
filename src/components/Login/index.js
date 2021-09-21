import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.css";

const Login = ({ setIsAuthenticated }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (formData) => {
    console.log(formData);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.access);
        setIsAuthenticated(true);
      })
      .catch((err) => {
        window.localStorage.clear();
        setIsAuthenticated(false);
      });
  };

  return (
    <div id="container">
      <form className="mainBox" onSubmit={handleSubmit(handleForm)}>
        <div>
          <h5>Nome de usuário</h5>
          <input
            {...register("username")}
            type="text"
            placeholder="Insira seu nome de usuário"
          />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <h5>Senha</h5>
          <input
            {...register("password")}
            type="password"
            placeholder="Insira sua senha"
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
      </form>
      <div></div>
    </div>
  );
};

export default Login;

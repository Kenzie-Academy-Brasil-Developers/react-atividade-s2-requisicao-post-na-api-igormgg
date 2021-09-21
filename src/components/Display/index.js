import "./styles.css";

const Display = ({ isAuthenticated }) => {
  if (isAuthenticated === null) {
    return <div></div>;
  }
  if (!isAuthenticated) {
    return (
      <div>
        <h4 id="naoAutorizado">Usuário não autorizado</h4>
      </div>
    );
  }
  return (
    <div>
      <h4 id="autorizado">Usuário autorizado</h4>
    </div>
  );
};

export default Display;

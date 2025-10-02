import "./MisComponentes.css";

const UserCard = ({ name, email, age, online }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
      <div className="status-section">
        Estado:
        <span className={`status-indicator ${online ? 'online' : 'offline'}`}></span>
        {online ? ' En línea' : ' Desconectado'}
      </div>
    </div>
  );
};

export default UserCard;

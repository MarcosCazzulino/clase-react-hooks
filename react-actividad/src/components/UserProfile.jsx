import "./MisComponentes.css";

const UserProfile = ({ user, showEmail, showPhone, layout = "vertical" }) => {
  return (
    <div className={`user-profile ${layout}`}>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Edad: {user.age}</p>

        {showEmail && <p>Email: {user.email}</p>}
        {showPhone && <p>Teléfono: {user.phone}</p>}
      </div>
    </div>
  );
};

export default UserProfile;
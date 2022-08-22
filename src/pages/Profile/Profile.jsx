import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="plus-button">+</div>
        <div className="logout-button">sair</div>
      </header>

      <body className="profile-body">
        <p>Your orders</p>
      </body>
    </div>
  );
}

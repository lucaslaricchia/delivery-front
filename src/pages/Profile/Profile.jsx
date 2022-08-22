import { useNavigate } from "react-router-dom";
import "./Profile.scss";

export default function Profile() {
  const navigate = useNavigate();

  function logOut() {
    navigate("/");
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="plus-button">+</div>
        <div className="logout-button" onClick={logOut}>
          sair
        </div>
      </header>

      <body className="profile-body">
        <p className="title">Your orders</p>
        <ul className="order-list">
          <li className="order-card">
            <div className="order-info">
            <p className="order-name">Sanduiche do mc donalds</p>
            <p className="order-payment">pagament: pix</p>
            </div>
            <div className="order-status">
              <p>A caminho...</p>
            </div>
          </li>
          <li className="order-card">
            <div className="order-info">
            <p className="order-name">Compras do mes</p>
            <p className="order-payment">pagament: dinheiro</p>
            </div>
            <div className="order-status delivered">
              <p>Entregue</p>
            </div>
          </li>
          <li className="order-card">
            <div className="order-info">
            <p className="order-name">Sanduiche do mc donalds</p>
            <p className="order-payment">pagament: transferencia</p>
            </div>
            <div className="order-status">
              <p>Aguardando entregador</p>
            </div>
          </li>
        </ul>
      </body>
    </div>
  );
}

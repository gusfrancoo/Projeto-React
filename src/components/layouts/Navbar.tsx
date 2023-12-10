import { Link } from "react-router-dom";
import logo from "/img/logo_cruzeiro.png";
import styles from "./Navbar.module.css";

function Navbar({ isLoggedIn }) { 
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
      };// Recebendo a propriedade isLoggedin
    return (
        <nav className={`${styles.navbar}`}>
            <Link to={"/home"}>
                <img src={logo} className={styles.img} alt="Logo" />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/home">Home</Link>
                </li>

                <li className={styles.item}>
                    <Link to="/criaProduto">Novo Produto</Link>
                </li>

                {!isLoggedIn && (
                <>
                    <li className={styles.item}>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/login">Entrar</Link>
                    </li>
                </>
                )}

                {isLoggedIn && (
                    <li className={styles.item}>
                        <Link to="/Perfil">Perfil</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
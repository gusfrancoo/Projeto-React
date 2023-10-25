import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "/img/logo_cruzeiro.png";
import styles from "./Navbar.module.css";


function Navbar(){
    return (
        <nav className={` ${styles.navbar}`}>
                <Link to={"/"}>
                    <img src={logo} className={styles.img} alt="Logo" />
                </Link>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/home">Home</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/criaProduto">Novo Produto</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/login">Entrar</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;
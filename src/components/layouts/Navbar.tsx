import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "/img/logo_cruzeiro.png";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";



function Navbar(){

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffetct(()=>{
    //     const verificarAutorizacao = () => {
    //         const user = await fetch(`http://localhost:8005/login/`, {
    //             method: "GET",
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //         });    
    //     }
    
    // }[isLoggedIn(false)])

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

                    <li className={styles.item}>
                        <Link to="/Perfil">Perfil</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;
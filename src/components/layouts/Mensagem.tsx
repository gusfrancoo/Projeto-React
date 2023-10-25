import { useState, useEffect } from "react";
import styles from "./Mensagem.module.css";
import MensagemProps from "../../interfaces/MensagemProps";

function Mensagem({type,msg} : MensagemProps) {
    const [visivel, setVisivel] = useState(false);
    
    useEffect(()=>{
        if(!msg) {
            setVisivel(false);
            return;
        }
        setVisivel(true);
        const timer = setTimeout(()=>{
            setVisivel(false);
        },3000);
        return () =>clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visivel && (
                <div className={`${styles.msg} ${styles[type]}`} >
                {msg}
                </div>
            )}
        </>
    );
}

export default Mensagem;
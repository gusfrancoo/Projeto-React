import { useState, useEffect} from 'react';
import Row from "../layouts/Row";
import Usuario from '../../interfaces/Usuario.interface';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../itens/ItemForm';
import styles from "./Cadastro.module.css";
import Container from '../layouts/Container';

function Cadastro(){
    const history = useNavigate();
    
    function createUser(usuario: Usuario){
        
    }


    return(
        <Container customClass="cadContainer"> 
            <div className={styles.container_custom}>
                <div className='row'>
                    <div className="col">
                        <ItemForm handleSubmit={createUser}
                            btnText="Enviar"
                            userData={{}}/>
                    </div>
                </div>
            </div>
        </Container>
  


    )

}

export default Cadastro;
import React from 'react';
import { Usuario } from '../../interfaces/Usuario.interface.ts'; // Ajuste o caminho conforme necessário
import styles from "./UserProfileComponent.css"

interface UserProfileComponentProps {
    userProfile: Usuario;
    onLogout: () => void; 
}

const UserProfileComponent: React.FC<UserProfileComponentProps> = ({ userProfile, onLogout }) => {
    const handleLogout = () => {
        // Dê um refresh na página
        
        
        // Chame a função de logout
        onLogout();
    };

    return (
        <div className={`card ${styles.card}`}>
            <h1>{userProfile.name}</h1>
            <p>Email: {userProfile.email}</p>
            {userProfile.bio && <p>Bio: {userProfile.bio}</p>}
            <button onClick={handleLogout} className="btn btn-danger mt-3">Sair</button>
        </div>
    );
};

export default UserProfileComponent;

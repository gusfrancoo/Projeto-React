import React from 'react';
import { Usuario } from '../../interfaces/Usuario.interface.ts'; // Ajuste o caminho conforme necessário
import styles from "./UserProfileComponent.css"

interface UserProfileComponentProps {
    userProfile: Usuario;
}

const UserProfileComponent: React.FC<UserProfileComponentProps> = ({ userProfile }) => {
    return (
        <div className={`card ${styles.card}`}>
            {userProfile.profilePictureUrl && (
                <img className={`img ${styles.img}`} src={userProfile.profilePictureUrl} alt={`${userProfile.name}'s Profile`} />
            )}
            <h1>{userProfile.name}</h1>
            <p>Email: {userProfile.email}</p>
            {userProfile.bio && <p>Bio: {userProfile.bio}</p>}
        </div>
    );
};

export default UserProfileComponent;
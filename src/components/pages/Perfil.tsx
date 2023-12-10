import React, { useState, useEffect } from 'react';
import UserProfileComponent from '../itens/UserProfileComponent';
import { UserProfile } from '../../interfaces/UserProfile.interface';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Perfil: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: '',
        email: '',
        bio: '',
        profilePictureUrl: '',
    });

    const navigate = useNavigate(); // Inicialize o hook useNavigate

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUserProfile(prevState => ({
                ...prevState,
                name: username,
            }));
        }
        // Aqui você pode adicionar código para carregar outros dados do usuário, se necessário
    }, []);

    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        // Redirecionar para a página inicial após o logout
        
        navigate('/home'); // Use navigate para redirecionar
        window.location.reload();
    };

    return (
        <div>
            <UserProfileComponent userProfile={userProfile} onLogout={onLogout} />
        </div>
    );
};

export default Perfil;

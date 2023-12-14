import React, { useState, useEffect } from 'react';
import UserProfileComponent from '../itens/UserProfileComponent';
import { UserProfile } from '../../interfaces/UserProfile.interface';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Card from '../itens/Card';

const Perfil: React.FC = () => {
    const [jogosComprados, setJogosComprados] = useState<Array<Jogo>>([]);
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
        carregarJogosComprados();
    }, []);

    const carregarJogosComprados = async () => {
        const userToken = localStorage.getItem('token');
    
        if (userToken) {
            try {
                const resposta = await fetch('http://localhost:8005/comprar', { // Substitua com a URL correta
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json'
                    }
                });
    
                if (!resposta.ok) {
                    throw new Error(`HTTP error! status: ${resposta.status}`);
                }
    
                const jogos = await resposta.json();
                setJogosComprados(jogos);
            } catch (error) {
                console.error('Erro ao carregar jogos:', error);
            }
        }
    };
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

            <div>
                {jogosComprados.map(jogo => (
                    <Card key={jogo.id} produto={jogo} /> // Use o componente Card para cada jogo
                ))}
            </div>
        </div>
    );
};

export default Perfil;

// components/Perfil.tsx
import React, { useState, useEffect } from 'react';
import UserProfileComponent from '../itens/UserProfileComponent';
import { UserProfile } from '../../interfaces/UserProfile.interface';
import { Jogo } from '../../interfaces/Jogo.interface';
import Card from '../itens/Card';
import { useNavigate } from 'react-router-dom';

const Perfil: React.FC = () => {
    const [jogosComprados, setJogosComprados] = useState<Array<Jogo>>([]);
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: '',
        email: 'example@gmail.com',
        bio: '',
        profilePictureUrl: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUserProfile(prevState => ({
                ...prevState,
                name: username,
            }));
        }
        carregarJogosComprados();
    }, []);

    const carregarJogosComprados = async () => {
        const userToken = localStorage.getItem('token');
    
        if (userToken) {
            try {
                const resposta = await fetch('http://localhost:8005/comprar', {
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
        navigate('/home');
        window.location.reload();
    };

    return (
        <div>
            <UserProfileComponent userProfile={userProfile} onLogout={onLogout} />
            <div>
            {jogosComprados.map(jogo => (
                    <CardUser 
                        key={jogo.id} 
                        idProduto={jogo.id}
                        name={jogo.nome} 
                        descricao={jogo.descricao} 
                        imageSrc={jogo.imageSrc} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Perfil;

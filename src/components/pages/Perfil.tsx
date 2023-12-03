import React from 'react';
import UserProfileComponent from '../itens/UserProfileComponent';
import { UserProfile } from '../../interfaces/UserProfile.interface'; // Ajuste o caminho conforme necessário

const Perfil: React.FC = () => {
    const userProfileData: UserProfile = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Developer and tech enthusiast.',
        profilePictureUrl: 'https://static.vecteezy.com/system/resources/previews/017/196/586/non_2x/user-icon-on-transparent-background-free-png.png',
    };

    return (
        <div>
            <UserProfileComponent userProfile={userProfileData} />
        </div>
    );
};

export default Perfil;
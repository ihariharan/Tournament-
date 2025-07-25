import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/useAuth';

const GoogleLoginButton: React.FC = () => {
    const { login } = useAuth();

    const onSuccess = (response: any) => {
        const { profileObj, tokenId } = response;
        login(profileObj, tokenId);
    };

    const onFailure = (response: any) => {
        console.error('Login failed: ', response);
    };

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginButton;
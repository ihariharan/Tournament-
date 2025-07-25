import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
    const { login } = useAuth();

    const onSuccess = (response: any) => {
        login(response);
    };

    const onFailure = (response: any) => {
        console.error('Login failed:', response);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};

export default Login;
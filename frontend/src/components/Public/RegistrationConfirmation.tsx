import React from 'react';

const RegistrationConfirmation: React.FC<{ roomId: string; teamName: string }> = ({ roomId, teamName }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Registration Confirmed!</h1>
            <p className="text-lg mb-2">Thank you for registering, {teamName}!</p>
            <p className="text-md mb-4">Your room ID is: <span className="font-semibold">{roomId}</span></p>
            <p className="text-md">You will receive a WhatsApp notification with your registration details shortly.</p>
        </div>
    );
};

export default RegistrationConfirmation;
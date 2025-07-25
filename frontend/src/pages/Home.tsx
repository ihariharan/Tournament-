import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to BGMI Tournament Manager</h1>
            <p className="text-lg mb-8">Manage your tournaments, schedule matches, and track leaderboards seamlessly.</p>
            <a href="/tournament" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Create a Tournament
            </a>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TournamentForm: React.FC = () => {
    const [tournamentName, setTournamentName] = useState('');
    const [map, setMap] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/tournaments', {
                tournamentName,
                map,
                startDate,
                endDate,
            });
            if (response.status === 201) {
                history.push('/tournaments');
            }
        } catch (err) {
            setError('Failed to create tournament. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Create Tournament</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Tournament Name</label>
                    <input
                        type="text"
                        value={tournamentName}
                        onChange={(e) => setTournamentName(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Map</label>
                    <select
                        value={map}
                        onChange={(e) => setMap(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="">Select a map</option>
                        <option value="Erangel">Erangel</option>
                        <option value="Sanhok">Sanhok</option>
                        <option value="Vikendi">Vikendi</option>
                        <option value="Karakin">Karakin</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Create Tournament
                </button>
            </form>
        </div>
    );
};

export default TournamentForm;
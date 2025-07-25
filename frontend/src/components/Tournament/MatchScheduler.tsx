import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';

const MatchScheduler = () => {
    const { user } = useAuth();
    const { sendNotification } = useNotification();
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [matchDetails, setMatchDetails] = useState({
        map: '',
        date: '',
        time: '',
        teams: []
    });

    useEffect(() => {
        const fetchTournaments = async () => {
            const response = await axios.get('/api/tournaments');
            setTournaments(response.data);
        };
        fetchTournaments();
    }, []);

    const handleTournamentChange = (e) => {
        setSelectedTournament(e.target.value);
    };

    const handleMatchDetailChange = (e) => {
        const { name, value } = e.target;
        setMatchDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const scheduleMatch = async () => {
        try {
            await axios.post('/api/matches', {
                tournamentId: selectedTournament,
                ...matchDetails
            });
            sendNotification(`Match scheduled successfully for tournament ID: ${selectedTournament}`);
            setMatchDetails({ map: '', date: '', time: '', teams: [] });
        } catch (error) {
            console.error('Error scheduling match:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Match Scheduler</h2>
            <select onChange={handleTournamentChange} className="mt-2 p-2 border rounded">
                <option value="">Select Tournament</option>
                {tournaments.map((tournament) => (
                    <option key={tournament.id} value={tournament.id}>
                        {tournament.name}
                    </option>
                ))}
            </select>
            <div className="mt-4">
                <input
                    type="text"
                    name="map"
                    placeholder="Map"
                    value={matchDetails.map}
                    onChange={handleMatchDetailChange}
                    className="p-2 border rounded"
                />
                <input
                    type="date"
                    name="date"
                    value={matchDetails.date}
                    onChange={handleMatchDetailChange}
                    className="p-2 border rounded ml-2"
                />
                <input
                    type="time"
                    name="time"
                    value={matchDetails.time}
                    onChange={handleMatchDetailChange}
                    className="p-2 border rounded ml-2"
                />
                <button onClick={scheduleMatch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                    Schedule Match
                </button>
            </div>
        </div>
    );
};

export default MatchScheduler;
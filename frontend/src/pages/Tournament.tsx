import React, { useEffect, useState } from 'react';
import TournamentForm from '../components/Tournament/TournamentForm';
import MatchScheduler from '../components/Tournament/MatchScheduler';
import RoomGroup from '../components/Tournament/RoomGroup';
import Bracket from '../components/Tournament/Bracket';
import { getTournaments } from '../api/tournamentApi';

const TournamentPage = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            const data = await getTournaments();
            setTournaments(data);
        };

        fetchTournaments();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Tournaments</h1>
            <TournamentForm />
            <MatchScheduler tournaments={tournaments} />
            <RoomGroup tournaments={tournaments} />
            <Bracket tournaments={tournaments} />
        </div>
    );
};

export default TournamentPage;
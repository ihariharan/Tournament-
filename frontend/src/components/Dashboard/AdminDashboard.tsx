import React, { useEffect, useState } from 'react';
import { getTournaments, getUsers } from '../../api/adminApi';
import TournamentCard from './TournamentCard';
import UserCard from './UserCard';

const AdminDashboard: React.FC = () => {
    const [tournaments, setTournaments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tournamentsData = await getTournaments();
            const usersData = await getUsers();
            setTournaments(tournamentsData);
            setUsers(usersData);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Tournaments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tournaments.map(tournament => (
                        <TournamentCard key={tournament.id} tournament={tournament} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-xl font-semibold mb-2">Users</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { RoleContext } from '../context/RoleContext';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import { fetchTournaments } from '../api/tournamentApi'; // Assume this API function is defined

const Admin = () => {
    const { user } = useContext(AuthContext);
    const { role } = useContext(RoleContext);
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        if (role === 'admin') {
            const loadTournaments = async () => {
                const data = await fetchTournaments();
                setTournaments(data);
            };
            loadTournaments();
        }
    }, [role]);

    if (role !== 'admin') {
        return <div>You do not have permission to access this page.</div>;
    }

    return (
        <div className="admin-page">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <AdminDashboard tournaments={tournaments} />
        </div>
    );
};

export default Admin;
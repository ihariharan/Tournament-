export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Tournament {
    id: number;
    name: string;
    map: string;
    startDate: Date;
    endDate: Date;
    createdBy: number; // User ID
}

export interface Match {
    id: number;
    tournamentId: number;
    teamAId: number; // Team ID
    teamBId: number; // Team ID
    scheduledTime: Date;
    status: 'scheduled' | 'ongoing' | 'completed';
}

export interface Team {
    id: number;
    name: string;
    members: string[]; // Array of player names
}

export interface LeaderboardEntry {
    teamId: number; // Team ID
    points: number;
    matchesPlayed: number;
    wins: number;
    losses: number;
}

export interface RoomGroup {
    id: number;
    matchId: number; // Match ID
    roomId: string;
    players: number[]; // Array of User IDs
}
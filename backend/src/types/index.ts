export interface User {
    id: number;
    email: string;
    name: string;
    role: 'admin' | 'user';
    createdAt: Date;
    updatedAt: Date;
}

export interface Tournament {
    id: number;
    name: string;
    map: string;
    startTime: Date;
    endTime: Date;
    createdBy: number; // User ID
    createdAt: Date;
    updatedAt: Date;
}

export interface Match {
    id: number;
    tournamentId: number; // Tournament ID
    roomId: string;
    scheduledTime: Date;
    status: 'scheduled' | 'ongoing' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

export interface Team {
    id: number;
    name: string;
    members: string[]; // Array of player names
    tournamentId: number; // Tournament ID
    createdAt: Date;
    updatedAt: Date;
}

export interface LeaderboardEntry {
    id: number;
    tournamentId: number; // Tournament ID
    teamId: number; // Team ID
    points: number;
    rank: number;
    createdAt: Date;
    updatedAt: Date;
}
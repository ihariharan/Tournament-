import { MapType } from '../types';

const supportedMaps: MapType[] = [
    { id: 1, name: 'Erangel', description: 'A classic map with a balanced layout.' },
    { id: 2, name: 'Sanhok', description: 'A smaller map with a tropical theme.' },
    { id: 3, name: 'Vikendi', description: 'A snowy map with unique terrain.' },
    { id: 4, name: 'Karakin', description: 'A small desert map with dynamic gameplay.' },
];

export const getMapById = (id: number): MapType | undefined => {
    return supportedMaps.find(map => map.id === id);
};

export const getAllMaps = (): MapType[] => {
    return supportedMaps;
};

export const isMapSupported = (mapName: string): boolean => {
    return supportedMaps.some(map => map.name.toLowerCase() === mapName.toLowerCase());
};
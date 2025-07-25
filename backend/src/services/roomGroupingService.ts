import { Player } from '../models/player';
import { Room } from '../models/room';

export class RoomGroupingService {
    private rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    public createRooms(players: Player[], roomSize: number): Room[] {
        const shuffledPlayers = this.shuffleArray(players);
        const roomCount = Math.ceil(shuffledPlayers.length / roomSize);

        for (let i = 0; i < roomCount; i++) {
            const roomPlayers = shuffledPlayers.slice(i * roomSize, (i + 1) * roomSize);
            this.rooms.push(new Room(i + 1, roomPlayers));
        }

        return this.rooms;
    }

    private shuffleArray(array: Player[]): Player[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    public getRooms(): Room[] {
        return this.rooms;
    }

    public clearRooms(): void {
        this.rooms = [];
    }
}
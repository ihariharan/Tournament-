# BGMI Tournament Management Application

This project is a full-stack web application designed for managing BGMI (Battlegrounds Mobile India) tournaments. It utilizes Node.js, Express, PostgreSQL, and React, providing a comprehensive solution for tournament organization, match scheduling, and real-time updates.

## Features

- **User Authentication**: Google authentication with role-based access control.
- **Tournament Management**: Create and manage tournaments, including match scheduling and room grouping logic.
- **Map Support**: Support for various maps used in BGMI tournaments.
- **Elimination Brackets**: Logic for managing elimination brackets for tournaments.
- **Live Match Updates**: Real-time match updates via WebSocket.
- **Leaderboard**: Ranking logic for teams and players, with a leaderboard display.
- **Admin Dashboard**: An admin interface for managing users, tournaments, and matches.
- **Public Pages**: Publicly accessible pages for viewing matches and team statistics.
- **Notifications**: WhatsApp notifications for room IDs and registration confirmations.
- **Responsive Design**: Styled using Tailwind CSS for a modern and responsive user interface.
- **Reusable Components**: Built with reusable React components for maintainability.

## Tech Stack

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React, Tailwind CSS
- **Authentication**: Google OAuth
- **Real-time Communication**: WebSocket
- **Notifications**: WhatsApp API

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd bgmi-tournament-app
   ```

2. Set up the backend:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Configure the database connection in `src/config/db.ts`.
   - Run the server:
     ```
     npm run start
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory:
     ```
     cd ../frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm run start
     ```

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use Google login for authentication.
- Admin users can manage tournaments and matches through the admin dashboard.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
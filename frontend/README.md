# BGMI Tournament Management Application

This project is a full-stack web application for managing BGMI (Battlegrounds Mobile India) tournaments. It utilizes Node.js, Express, PostgreSQL, and React, providing a comprehensive solution for tournament organization, match scheduling, and live updates.

## Features

- **User Authentication**: Google authentication with role-based access control.
- **Tournament Management**: Create and manage tournaments, including match scheduling and room grouping logic.
- **Map Support**: Support for various maps used in BGMI tournaments.
- **Elimination Brackets**: Manage elimination brackets for tournament progression.
- **Live Match Updates**: Real-time updates during matches using WebSocket.
- **Leaderboard**: Ranking logic to display player and team standings.
- **Admin Dashboard**: A dedicated dashboard for administrators to manage tournaments and users.
- **Public Pages**: Accessible pages for viewing matches and team statistics.
- **Notifications**: WhatsApp notifications for room IDs and registration confirmations.
- **Responsive Design**: Styled using Tailwind CSS for a modern and responsive user interface.

## Project Structure

```
bgmi-tournament-app
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
```

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
   - Configure your PostgreSQL database in `src/config/db.ts`.
   - Start the backend server:
     ```
     npm run start
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm run start
     ```

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the Google login button to authenticate.
- Navigate through the dashboard to create tournaments, schedule matches, and view leaderboards.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
# BGMI Tournament Management Application

This project is a full-stack web application designed for managing BGMI (Battlegrounds Mobile India) tournaments. It utilizes Node.js, Express, PostgreSQL, and React, providing a comprehensive solution for tournament organization, match scheduling, and live updates.

## Features

- **User Authentication**: Google authentication with role-based access control for users and admins.
- **Tournament Management**: Create and manage tournaments, including scheduling matches and grouping players into rooms.
- **Match Scheduling**: Schedule matches with support for various maps and elimination brackets.
- **Live Match Updates**: Real-time updates during matches using WebSocket for live interaction.
- **Leaderboard**: Dynamic leaderboard ranking logic to display team standings.
- **Admin Dashboard**: A dedicated dashboard for administrators to manage tournaments and users.
- **Public Pages**: Accessible pages for viewing matches, team statistics, and registration confirmations.
- **Notifications**: WhatsApp notifications for room IDs and registration confirmations.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive user interface.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Authentication**: Google OAuth
- **Real-time Communication**: WebSocket
- **Notifications**: WhatsApp API

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
- Google Cloud Platform account for OAuth

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd bgmi-tournament-app
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Configure the database connection in `backend/src/config/db.ts`.
   - Set up Google authentication in `backend/src/config/googleAuth.ts`.

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run start
   ```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
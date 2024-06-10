# Mastodon Live Stream Application

## Overview

This project streams public Mastodon posts in real-time and displays them on a web application.

## Technologies Used

- Backend: Go
- Frontend: React, TypeScript
- Containerization: Docker
- Communication: WebSocket

## Setup Instructions

1. Clone the repository:

git clone https://github.com/rayaanshahid/mastodon-frontend.git cd mastodon-frontend

2. Build and run the application using Docker Compose:

docker-compose up -d

to open multiple instances of frontend use 'npm start' on multiple command-lines and press 'y' when option for multiple ports given

3. Open your browser and navigate to `http://localhost:3000` to see the live Mastodon posts.

## Architecture

The application consists of two main services:

- **Backend**: Connects to the Mastodon API and streams public posts using WebSocket.
- **Frontend**: Displays the live posts received from the backend WebSocket.

Both services are containerized using Docker and orchestrated with Docker Compose.

## CI/CD

Continuous Integration will be set up using GitHub Actions to automatically build and test the application on every push to the main branch.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or bug fixes.

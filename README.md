# JavaScript Demo API

A simple demonstration API built with Express.js, featuring basic CRUD operations and containerization support.

## Features

- RESTful API endpoints
- Express.js server
- Jest testing framework
- Docker containerization
- ESLint for code quality

## Prerequisites

- Node.js 18+ 
- Docker (optional, for containerization)

## Installation

```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
# or
make dev
```

### Production Mode
```bash
npm start
# or
make start
```

### Using Docker
```bash
# Build the Docker image
make build-docker

# Run the container
make run-docker
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user

## Testing

Run tests:
```bash
npm test
# or
make test
```

Run tests in watch mode:
```bash
npm run test:watch
# or
make test-watch
```

Run tests with coverage:
```bash
npm run test:coverage
# or
make test-coverage
```

## Linting

Run ESLint:
```bash
npm run lint
# or
make lint
```

Fix linting issues:
```bash
npm run lint:fix
# or
make lint-fix
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Project Structure

```
js-demo-api/
├── index.js         # Main application file
├── index.test.js    # Test file
├── jest.config.js   # Jest configuration
├── package.json     # Node.js dependencies
├── Dockerfile       # Docker configuration
├── Makefile        # Common commands
└── README.md       # This file
```
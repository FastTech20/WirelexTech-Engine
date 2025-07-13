# WirelexTech Backend Project

Robust backend application for wirelextech data affiliation

## Features

1. RESTful API: Standard CRUD operations for user resources.

2. Authentication: Secure user authentication using JSON Web Tokens (JWT).

3. Database Integration: Connects seamlessly with MongoDB via Mongoose.

4. Validation: Robust input validation and error handling for all routes.

5. Rate Limiting: Protects against brute-force attacks on login endpoints.

## Tech Stack

1. Node.js (Typescript)

2. Express.js (Web framework)

3. Mongoose (MongoDB object modeling)

4. JSON Web Tokens (JWT) for authentication

5. Bcrypt for password hashing

## Getting Started

### Prerequisites

Ensure you have the following installed:

- `Node.js (LTS version recommended)`

- `npm (Node Package Manager)`

### Installation

- Clone the repository

```bash
git clone https://github.com/FastTech20/WirelexTech-Engine.git
```

- Navigate to the project directory

```bash
cd WirelexTech-Engine
```

- Install dependencies

```bash
npm install
```

### Environment Variables

The project uses a .env file for configuration. Create this file in the root directory and populate it based on the .env.example file provided in the repository.

PORT = `3000`
NODE_ENV = `development`

#### Database

MONGO_DB_URL = `mongodb+srv://affiliate25:affiliate%4025@affiliatecluster.audxr9d.mongodb.net/affiliate`

### Running the Application

#### Development

```bash
npm run dev
```

#### Build

```bash
npm run build
```

#### Production

```bash
npm run start
```

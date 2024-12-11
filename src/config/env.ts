import dotenv from 'dotenv';
dotenv.config(); // Load .env file

type Env = { // Define the type of environment variables
    PORT: number;
}

const env: Env = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Default port is 3000
}

export default env;
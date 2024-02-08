import { Client } from 'pg';

import { DB_URL } from './config';
import { createTables } from './db/setup';
import { createUser } from './db/user';

export const client = new Client({
    connectionString: DB_URL
});


async function initializeDatabase() {
    try {
        await client.connect(); // Establish connection
        await createTables(); // Create necessary tables
        await createUser("naruto", "hinata", "Naruto Uzumaki"); // Create a user
        await client.end(); // Close connection when done
    } catch (error) {
        console.error('Error initializing database:', error);
        await client.end(); // Close connection in case of error
    }
}

// initializeDatabase();
// git pull hkirat master --no-rebase

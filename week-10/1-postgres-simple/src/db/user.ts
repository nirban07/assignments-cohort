import { client } from '../';

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
	try {
		// Execute the SQL query to insert a new user into the users table
		const result = await client.query(`
            INSERT INTO users (username, password, name)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [username, password, name]);

		// Return the inserted user object
		return result.rows[0];
	} catch (error) {
		// Handle any errors that occur during the database operation
		console.error("Error creating user:", error);
		throw error;
	}
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
	try {
		// Execute the SQL query to retrieve the user from the database
		const result = await client.query(`
            SELECT id, username, password, name
            FROM users
            WHERE id = $1
        `, [userId]);

		// Check if a user with the specified ID exists
		if (result.rows.length === 0) {
			return null; // User not found
		}

		// Return the user object
		return result.rows[0];
	} catch (error) {
		// Handle any errors that occur during the database operation
		console.error("Error fetching user:", error);
		throw error;
	}
}

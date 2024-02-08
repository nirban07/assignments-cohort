import { client } from '../';

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
	try {
		// Execute the SQL query to insert a new todo into the todos table
		const result = await client.query(`
            INSERT INTO todos (user_id, title, description, done)
            VALUES ($1, $2, $3, false)
            RETURNING id, title, description, done
        `, [userId, title, description]);

		// Return the inserted todo object
		return result.rows[0];
	} catch (error) {
		// Handle any errors that occur during the database operation
		console.error("Error creating todo:", error);
		throw error;
	}
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
	try {
		// Execute the SQL query to update the todo item
		const result = await client.query(`
            UPDATE todos
            SET done = true
            WHERE id = $1
            RETURNING id, title, description, done
        `, [todoId]);

		// Check if a todo with the specified ID exists
		if (result.rows.length === 0) {
			return null; // Todo not found
		}

		// Return the updated todo object
		return result.rows[0];
	} catch (error) {
		// Handle any errors that occur during the database operation
		console.error("Error updating todo:", error);
		throw error;
	}
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
	try {
		// Execute the SQL query to retrieve all todos of the user
		const result = await client.query(`
            SELECT id, user_id, title, description, done
            FROM todos
            WHERE user_id = $1
        `, [userId]);

		// Return the array of todos
		return result.rows;
	} catch (error) {
		// Handle any errors that occur during the database operation
		console.error("Error fetching todos:", error);
		throw error;
	}
}
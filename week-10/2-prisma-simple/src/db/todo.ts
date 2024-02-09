import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
		// Create a new todo in the database
		const todo = await prisma.todo.create({
			data: {
				title,
				description,
				userId
			}
		});

		// Return the created todo object
		return {
			id: todo.id,
			title: todo.title,
			description: todo.description,
			done: todo.done
		};
	} catch (error) {
		// Handle errors
		console.error("Error creating todo:", error);
		throw error; // Rethrow the error to be handled by the caller
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
		// Find the todo by its id and update the done field to true
		const updatedTodo = await prisma.todo.update({
			where: {
				id: todoId
			},
			data: {
				done: true
			}
		});

		// Return the updated todo object
		return {
			id: updatedTodo.id,
			title: updatedTodo.title,
			description: updatedTodo.description,
			done: updatedTodo.done
		};
	} catch (error) {
		// Handle errors
		console.error("Error updating todo:", error);
		throw error; // Rethrow the error to be handled by the caller
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
		const alltodo = await prisma.todo.findMany({
			where: {
				userId: userId
			}
		})

		return alltodo
	} catch (err) {
		console.log("error getting all todo", err)
		throw err;
	}
}
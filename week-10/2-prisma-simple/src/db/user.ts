import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


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
		// Create a new user in the database
		const newUser = await prisma.user.create({
			data: {
				username,
				password,
				name
			}
		});

		// Return the created user object
		return newUser;
	} catch (error) {
		// Handle errors
		console.error("Error creating user:", error);
		throw error; // Rethrow the error to be handled by the caller
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
		const user = await prisma.user.findFirst({
			where: {
				id: userId
			}
		})
		return user
	} catch (err) {
		console.log("Error when getting user", err);
		throw err
	}
}

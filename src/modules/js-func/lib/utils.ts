import type { UserData } from '@/data/users';

/**
 * Finds the user with the minimum age from the provided user data.
 * @param users - The user data collection.
 * @returns The user object with the lowest age.
 */
export function findMinAgeUser(users: UserData) {
	return users.reduce((previous, current) => {
		return current.age < previous.age ? current : previous;
	}, users[0]);
}

/**
 * Finds the user with the maximum age from the provided user data.
 * @param users - The user data collection.
 * @returns The user object with the highest age.
 */
export function findMaxAgeUser(users: UserData) {
	return users.reduce((previous, current) => {
		return current.age > previous.age ? current : previous;
	}, users[0]);
}

/**
 * Sorts the users collection by age in ascending order.
 * @param users - The user data collection to be sorted in place.
 * @returns The sorted user data collection.
 */
export function sortByMinAgeUsers(users: UserData) {
	return users.sort((a, b) => a.age - b.age);
}

/**
 * Sorts the users collection by age in descending order.
 * @param users - The user data collection to be sorted in place.
 * @returns The sorted user data collection.
 */
export function sortByMaxAgeUsers(users: UserData) {
	return users.sort((a, b) => b.age - a.age);
}

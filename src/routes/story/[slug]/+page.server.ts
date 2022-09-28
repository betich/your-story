import { error } from '@sveltejs/kit';
import { StoryData, type Story } from './story';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data: Story = StoryData[+params.slug - 1];

	if (data) {
		return {
			story: data
		};
	} else {
		throw error(404);
	}

	// locals.userid comes from src/hooks.js
	// const response = await api('GET', `todos/${locals.userid}`);

	// if (response.status === 404) {
	// 	// user hasn't created a todo list.
	// 	// start with an empty array
	// 	return {
	// 		todos: [] as Todo[]
	// 	};
	// }

	// if (response.status === 200) {
	// 	return {
	// 		todos: (await response.json()) as Todo[]
	// 	};
	// }

	// throw error(response.status);
};

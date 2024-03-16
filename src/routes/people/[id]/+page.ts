import type { peopleVariables as V } from './$houdini';

export const load: V = ({ params }) => {
	return { id: params.id };
};

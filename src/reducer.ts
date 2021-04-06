import { Action } from './actions';

export interface NotesStateInterface {
	notes: string[];
}

const initialState = {
	notes: [],
};

export const notesReducer = (
	state: NotesStateInterface = initialState,
	action: Action,
) => {
	switch (action.type) {
		case 'ADD_NOTE': {
			return { ...state, notes: [...state.notes, action.payload] };
		}
		default:
			return state;
	}
};

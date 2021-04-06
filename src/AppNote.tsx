import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewNoteInput } from './components/NewNoteInput';
import { NotesStateInterface } from './reducer';

export default function AppNote() {
	const notes = useSelector<
		NotesStateInterface,
		NotesStateInterface['notes']
	>(state => state.notes);

	const dispatch = useDispatch();

	const addNote = (note: string) => {
		dispatch({ type: 'ADD_NOTE', payload: note });
	};

	return (
		<>
			<NewNoteInput addNote={addNote} />
			<hr />
			<ul>
				{notes.map(note => (
					<li key={note}>{note}</li>
				))}
			</ul>
		</>
	);
}

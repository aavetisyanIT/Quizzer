import React, { ChangeEvent } from 'react';

interface NewNoteInputPropsInterface {
	addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputPropsInterface> = ({
	addNote,
}) => {
	const [note, setNote] = React.useState('');

	const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
		setNote(event.target.value);
	};

	const onAddNoteClick = () => {
		addNote(note);
		setNote('');
	};

	return (
		<div>
			<input
				value={note}
				onChange={updateNote}
				type='text'
				name='note'
				placeholder='Note'
			/>
			<button onClick={onAddNoteClick}>Add Note</button>
		</div>
	);
};

import { useSelector, useDispatch } from 'react-redux';
import { addNote } from './actions';
import { NewNoteInput } from './components/NewNoteInput';
import { NotesStateInterface } from './reducer';

export default function AppNote() {
	const notes = useSelector<
		NotesStateInterface,
		NotesStateInterface['notes']
	>(state => state.notes);

	const dispatch = useDispatch();

	const onAddNote = (note: string) => {
		dispatch(addNote(note));
	};

	return (
		<>
			<NewNoteInput addNote={onAddNote} />
			<hr />
			<ul>
				{notes.map(note => (
					<li key={note}>{note}</li>
				))}
			</ul>
		</>
	);
}

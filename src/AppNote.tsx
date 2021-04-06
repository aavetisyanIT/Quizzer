import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';

export default function AppNote() {
	return (
		<>
			<NewNoteInput addNote={alert} />
			<hr />
			<ul>
				<li>Some note</li>
			</ul>
		</>
	);
}

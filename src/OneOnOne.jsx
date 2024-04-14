import { useState } from "react"

export default function OneOnOne({id, notes, setStudents, studentArr, indx}) {

    const [note, setNote] = useState({
        commenter: "",
        comment: ""
    });


    const [oldNotes, setOldNotes] = useState(notes);

    function addNote(event) {
        event.preventDefault();
        setOldNotes([...oldNotes, note]);
        const arrCopy = [...studentArr];
        arrCopy[indx].notes = [...oldNotes];
        setStudents(arrCopy);
        console.log(studentArr[indx]);
    }

    function handleChange(event) {
        setNote({
            ...note,
            [event.target.id]: event.target.value
        })
    }


    return (
        <>
        <form onSubmit={addNote} className="oneForm">
            <h2>1-on-1 Notes</h2>

            <label htmlFor="commenter">Commenter Name</label>
            <input type="text" id="commenter" name="commenterName" onChange={handleChange} value={note.commenter} />
            <br />

            <label htmlFor="comment">Comment</label>
            <input type="text" id="comment" name="comment" onChange={handleChange} value={note.comment} />
            <br />

            <input type="submit" value="Add Note" className="submitButton" />
        </form>
        <ul>
            {oldNotes.map((notePad) => <li>{notePad.commenter + "--" + notePad.comment}</li> )}
        </ul>
        </>
    )
}
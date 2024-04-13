import { useState } from "react"

export default function OneOnOne() {

    const [note, setNote] = useState({
        commenter: "",
        comment: ""
    });

    function addNote(event) {
        event.preventDefault();
    }

    function handleChange(event) {
        setNote({
            ...note,
            [event.target.id]: event.target.value
        })
    }


    return (
        <form onSubmit={addNote} className="oneForm">
            <h2>1-on-1 Notes</h2>
            
            <label for="commenter">Commenter Name</label>
            <input type="text" id="commenter" name="commenterName" onChange={handleChange} value={note.commenter} />
            <br />

            <label for="comment">Comment</label>
            <input type="text" id="comment" name="comment" onChange={handleChange} value={note.comment} />
            <br />

            <input type="submit" value="Add Note" className="submitButton" />
        </form>
    )
}
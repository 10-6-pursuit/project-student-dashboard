export default function OneOnOneNotes ({student}){
    const { notes } = student;
    return(
        <>
        <div>
            <h3>1-on-1 Notes</h3>
            <form>
                <label htmlFor="commenter-name">Commenter Name </label><input id="commenter-name" type="text"></input><br/>
                <label htmlFor="comment">Comment </label><input id="comment" type="text"></input><br/>
                <button type="submit">Add Note</button>
            </form>
            <div className="comment-list">
            {notes.map(({commenter, comment}) => <li>{commenter}: {comment}</li>)}
            </div>
        </div>
        </>
    )
}
export default function OneOnOne() {
    return (
        <form className="oneForm">
        <h2>1-on-1 Notes</h2>
        <label for="commenterName">Commenter Name</label>
        <input type="text" id="commenterName" name="commenterName" /><br />
        <label for="comment">Comment</label>
        <input type="text" id="comment" name="comment" /><br />
        <input type="submit" value="Submit" className="submitButton" />
        </form>
    )
}
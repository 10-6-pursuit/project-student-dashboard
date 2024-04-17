import './Notes.scss';
import { useState } from 'react';

export default function Notes({ students }) {
  const [comments, setComments] = useState(students.notes);
  const [newComment, setNewComment] = useState({ commenter: '', comment: '' });

  function handleChange(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
      e.preventDefault();
      setNewComment([...comments, '']);
  }

  return (
    <div className="Notes">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Commenter Name
          <input
            type="text"
            value={newComment.commenter}
            onChange={handleChange}
            name="commenterName"
            id="commenterName"
          />
        </label>
        <br />
        <label>
          Comment
          <input
            type="text"
            value={newComment.comment}
            onChange={handleChange}
            name=""
            id=""
          />
        </label>
        <br />
        <input type="submit" value="Add Note" id="submit" />
      </form>
      <ul>
        {students.notes.map((note) => {
          return (
            <li>
              {note.commenter} says, "{note.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}

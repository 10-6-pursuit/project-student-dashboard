import './Notes.scss';
import { useState } from 'react';

export default function Notes({ student, addNote }) {
  const [comments, setComments] = useState(student.notes);
  const [newComment, setNewComment] = useState({ commenter: '', comment: '' });

  function handleChange(e) {
    setNewComment({
      ...newComment,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNote(newComment, student);
    setNewComment({
      commenter: '',
      comment: '',
    });
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
            name="commenter"
            id="commenter"
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
            id="comment"
          />
        </label>
        <br />
        <input type="submit" value="Add Note" id="submit" />
      </form>
      <ul>
        {student.notes.map((note) => {
          return (
            <li key={student.notes.indexOf(note)}>
              {note.commenter} says, "{note.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}

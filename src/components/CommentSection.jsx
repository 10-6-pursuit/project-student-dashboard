import React from "react";

export default function CommentsSection({ comments }) {
  const initializer = (str) => `${str[0]}.`;
  const commenterName = (input) => {
    const name = input.split(" ");
    return `${name[0]} ${initializer(name[1])}`;
  };

  return (
    <div>
      <ul>
        {comments.map((note, index) => (<li key={index}>{commenterName(note.commenter)} says, {`"${note.comment}"`}</li>))}
      </ul>
    </div>
  );
}

export default function Note({ note }) {
  const { commenter, comment } = note;
  
  return (
    <li className="note" >
      {commenter} says "{comment}"
    </li>
  )
}
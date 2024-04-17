import { useState } from "react";

function Studentdetails({ student }) {

    const [notes, setNotes] = useState(student.notes);

    const [comments, setComments] = useState({
        commenter: "",
        comment: ""
    });

    function handleTextChange(event) {
        setComments({...comments, [event.target.id]: event.target.value})
    };

    function addNotes(event) {
        event.preventDefault();
        setNotes([...notes, comments]);
        setComments({
            commenter: "",
            comment: ""
        })
    }

    const [show, setShow] = useState("Show More...");

    const [showDetails, setShowDetails] = useState(false);


    function toggleDetails() {
        if (showDetails === "none") {
            setShowDetails("block")
            setShow("Show Less...")
        } else {
            setShowDetails("none")
            setShow("Show More...")
        }
    }

    return (
        <p>Show More..</p>
    )


    



}
export default Studentdetails;
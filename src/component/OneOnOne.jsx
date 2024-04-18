import { useState } from "react"

export default function OneOnOne({student,addComment}){
    const[noteCount,setNoteCount]=useState(student.notes.length)


    const [changeText,setChangeText]=useState({commenter:``,
comment:``})

    function handleTextChange(event){
        setChangeText({...changeText,[event.target.id]:event.target.value})
        
    }
    // function addComment(){
    //     setCommentList([changeText,...commentList])

        
    // }
   
    function handleSubmit(e){
        e.preventDefault()
        addComment(student,changeText)
        setNoteCount(student.notes.length)
        setChangeText({...changeText,commenter:``,comment:``})
        
    }
    return(
       <>
       <div className="oneonecontainer">
        <br />
        <br />
        <h4>
            1-on-1 Notes
        </h4>
        <h4>
          Note Count:<span>{noteCount}</span>
        </h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Commenter Name
                <input value={changeText.commenter}type="text"  id="commenter" required onChange={handleTextChange}/>
            </label>
            <br />
            <label htmlFor="">
                Comment
                <input value={changeText.comment} type="text" name="" id="comment" onChange={handleTextChange} required/>
            </label>
            <br />
            <button> Add Note</button>
        </form>
        <ul>
            {...student.notes.map(element=>{
              
              return ( <li className="oneonone-comment">
                {element.commenter} says {element.comment}
            </li>)})
            }
                
        
        </ul>
        </div>
       </>
        
    )
}
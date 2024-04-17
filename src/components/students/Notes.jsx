import { useState } from "react";

export default function Comments({ id, notes, onAddNotesToStudent }) {
	const [newComment, setNewComment] = useState({
		commenter: "",
		comment: "",
	});

	function handleTextChange(e) {
		e.preventDefault();
		const { value, name } = e.target;

		setNewComment((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmmit(e) {
		e.preventDefault();
		onAddNotesToStudent(id, newComment);
		setNewComment( {
				commenter: "",
				comment: "",
			})
		
	}

	return (
		<div className="comments">
			<h2 className="global__subtitle">1-on-1 Notes</h2>
			<form className="comments__form" onSubmit={handleSubmmit}>
				<div>
					<label htmlFor="name">Commenter Name</label>
					<input
						required
						onChange={handleTextChange}
						className="input"
						type="text"
						name="commenter"
					/>
				</div>
				<div>
					<label htmlFor="name">Comment</label>
					<input
						required
						onChange={handleTextChange}
						className="input"
						type="text"
						name="comment"
					/>
				</div>
				<button className="commets__btn">Add Notes</button>
			</form>

			<section className="comment__list">
				<ul>
					{notes.map((ele, idx) => (
						<li key={idx}>
							<span>{ele.commenter} says,</span>"<span>{ele.comment}</span>"
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}

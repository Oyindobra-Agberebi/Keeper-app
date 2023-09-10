function Card(props) {
    // let noteTitle = "This is the note title";
    // let noteText = "This is the note content";

    return (
        <div className="Card">
            <div className="card-details">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Card;
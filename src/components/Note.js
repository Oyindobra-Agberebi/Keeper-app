function Note () {
    let noteTitle = "This is the note title";
    let noteText = "This is the note content";

    return (
        <div className="Note">
            <h3>{noteTitle}</h3>
            <p>{noteText}</p>
        </div>
    );
}

export default Note;
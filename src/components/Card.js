function Card(props) {

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
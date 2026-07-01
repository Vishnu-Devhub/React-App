function Card(props) {        // ✅ Capitalized
    return (
        <div className="box">
            <img className="avatar" src={props.imgUrl} alt={props.name} />
            <div className="card-info">
                <h2 className="contact-name">{props.name}</h2>
                <div className="contact-detail">
                    <span className="detail-icon">📞</span>
                    <span>{props.number}</span>
                </div>
                <div className="contact-detail">
                    <span className="detail-icon">✉️</span>
                    <span>{props.email}</span>
                </div>
                <div className="contact-detail">
                    <span className="detail-icon">📝</span>
                    <span>{props.desc}</span>
                </div>
            </div>
            <div className="card-actions">
                <button className="btn-call">Call</button>
                <button className="btn-message">Message</button>
            </div>
        </div>
    );
}

export default Card;
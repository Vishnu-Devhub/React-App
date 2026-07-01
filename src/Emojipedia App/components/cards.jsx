import React from "react";

function Card(props) {
    return (
        <div className="box">
            <img className="avatar" src={props.url} alt={props.name} />
            <h2 className="name">
                {props.name}
            </h2>
            <p className="desc">
                {props.desc}
            </p>
        </div>
    );
}

export default Card;
import React from "react";

function Card(props) {
    return (
        <div class="box">
            <img class="avatar" src={props.url} alt="emo2" />
            <h2 class="name">
                {props.name}
            </h2>
            <p class="desc">
                {props.desc}
            </p>
        </div>
    );
}

export default Card;
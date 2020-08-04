import React from "react";

function Thumb(props) {
    const [hoeveelheid, setHoeveelheid] = React.useState('');
    return (

        <a href={props.url}>
        <img
            src={props.imgsrc}
            // alt={props.titel}
            class="thumb"
            style={{paddingBottom : '20px'}}
        />
        <span>
            {props.titel}
        </span>
        </a>
    );
}

export default Thumb;
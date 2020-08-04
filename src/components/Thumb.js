import React from "react";

function Thumb(props) {
    const [hoeveelheid, setHoeveelheid] = React.useState('');
    return (

        <div className="thumbdiv">
        <a href={props.url}>
        <img
            src={props.imgsrc}
            // alt={props.titel}
            class="thumb"
            style={{paddingBottom : '1px'}}
        />
        <span>
            {props.titel}
        </span>
        </a>
        </div>
    );
}

export default Thumb;
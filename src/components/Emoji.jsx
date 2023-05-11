import React from "react";


export default function Emoji(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <img alt="emoji" src={props.img}></img>
            <p>{props.discription}</p>
        </div>
    )
}
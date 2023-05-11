import React from "react";
import Emoji from "./Emoji";
import emojiData from "../emojiData";
import Footer from "./Footer";

export default function App(){
    return(
        <div className="card-container">
            <h1 className="title">Emojipedia</h1>
            {emojiData.map(item=>(<Emoji key={item.id} name={item.name} img={item.img} discription={item.discription}/>))}        
            <Footer />
        </div>
    )
}
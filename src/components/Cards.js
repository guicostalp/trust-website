import React from "react";
import CardItem from "./CardItem";
import './Cards.css'


function Cards () {
    return (
        <div className="cards">
            <h1>Subscribe to our newsletter to receive these amaizing news</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/meg-jerrard-u7lgJ8qrdAM-unsplash.jpg"
                        text="Explore the hidden waterfall deep inside tha Amazon Jungle"
                        label="Adventure"
                        path="/services" />
                        <CardItem
                        src="images/Discovering-New-Zealands-Maori-Culture-_-Image-Via-Trafalgar-800x450.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/dd08d87b45817af7ab79590bf7fa7e66.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                        <CardItem
                        src="images/img-9.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                        <CardItem
                        src="images/duskfall-crew-vIQfQjrovW8-unsplash.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Cards